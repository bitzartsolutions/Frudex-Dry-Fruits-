export default function ProductCard({ product }) {
  return <article className="product-card" style={{ '--accent': product.accent }}><div className="product-top"><span>{product.code}</span><span>{product.category}</span></div><div className="product-orb"><span>{product.name.split(' ')[0]}</span></div><h2>{product.name}</h2><p>{product.description}</p><a href="#">Discover product <span aria-hidden="true">↗</span></a></article>;
}
