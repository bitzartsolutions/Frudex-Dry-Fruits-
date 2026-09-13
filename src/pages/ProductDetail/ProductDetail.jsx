import { Link, Navigate, useParams } from 'react-router-dom';
import { getProductBySlug, productDetails, productImages } from '../../data/productDetails';

function Icon({ children }) {
  return <span className="material-symbols-outlined">{children}</span>;
}
function Label({ children, light = false }) {
  return <span className={`products-label ${light ? 'products-label-light' : ''}`}>{children}</span>;
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <Navigate replace to="/products" />;

  const related = productDetails.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main className="products-reference product-detail-page">
      <section className="products-hero">
        <div className="products-hero-glow" />
        <div className="products-container products-hero-grid">
          <div>
            <Link className="product-detail-back" to="/products"><Icon>arrow_back</Icon> All Categories</Link>
            <span className="products-pill"><i /> {product.number}</span>
            <h1>{product.title}</h1>
            <p className="products-quote">{product.quote}</p>
            <p>{product.description}</p>
            <div className="products-meta">
              <span><Icon>verified</Icon>{product.badge}</span>
              <span><Icon>eco</Icon>Traceable Sourcing</span>
              <span><Icon>hotel_class</Icon>Premium Quality</span>
            </div>
          </div>
          <div className="products-hero-image">
            <img alt={product.title} src={productImages[product.imageKey]} />
            <div>
              <Label light>Product Specification</Label>
              <strong>{product.location}</strong>
              <span>100% Traceable</span>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-container">
          <div className="products-heading">
            <div>
              <Label>{product.number} • Product Details</Label>
              <h2>{product.title} Details</h2>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="spec-grid product-detail-spec">
            <span><b>Varieties</b>{product.specs.cultivars}</span>
            <span><b>Tasting Notes</b>{product.specs.tastingNotes}</span>
            <span><b>Specification</b>{product.specs.specification}</span>
          </div>
        </div>
      </section>

      {product.varieties && (
        <section className="products-secondary">
          <div className="products-container">
            <div className="products-centered">
              <Label>Product Varieties</Label>
              <h2>All {product.title} Varieties</h2>
              <p>Every {product.title.toLowerCase()} variety is chosen for its own taste, texture, and origin.</p>
            </div>
            <div className="variety-grid">
              {product.varieties.map((variety) => (
                <article key={variety.name}>
                  <div className="card-top"><Label>{variety.origin}</Label></div>
                  <h3>{variety.name}</h3>
                  <img alt={variety.name} src={variety.image} />
                  <p>{variety.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="products-banner">
        <div className="products-container">
          <div>
            <Label light>Get in Touch</Label>
            <h3>Inquire About {product.title}</h3>
            <p>Contact our team for bulk pricing, product samples, or custom branding options.</p>
          </div>
          <div>
            <Link to="/products#institutional-inquiry">Contact Our Team <Icon>arrow_forward</Icon></Link>
          </div>
        </div>
      </section>

      <section className="products-secondary" id="discover-suite">
        <div className="products-container">
          <div className="products-centered">
            <Label>Explore More</Label>
            <h2>Other Categories to Explore</h2>
            <p>Explore more of our dates, nuts, spices, snacks, and gifting collections.</p>
          </div>
          <div className="discover-grid">
            {related.map((item) => (
              <article key={item.slug}>
                <div>
                  <div className="card-top"><Label>{item.number}</Label><span>Global Sourcing</span></div>
                  <h3>{item.title}</h3>
                  <p className="products-quote">{item.quote}</p>
                  <img alt={item.title} src={productImages[item.imageKey]} />
                  <p>{item.description}</p>
                </div>
                <Link to={`/products/${item.slug}`}>View Details <Icon>arrow_forward</Icon></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
