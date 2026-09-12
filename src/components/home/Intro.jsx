import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <section className="home-hero page-width">
      <div className="hero-copy reveal">
        <p className="eyebrow">Fruit, with a point of view</p>
        <h1 className="display">Good things<br /><em>grow</em> here.</h1>
        <p className="hero-text">Freshly-minded food and drink for people who like their everyday a little more extraordinary.</p>
        <Link className="button button-dark" to="/products">Meet the range <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="hero-art drift" aria-label="Abstract illustration of a sliced orange" role="img">
        <div className="fruit fruit-large"><span /></div>
        <div className="fruit fruit-small"><span /></div>
        <div className="leaf leaf-one" /><div className="leaf leaf-two" />
        <span className="art-note">Since<br />2014</span>
      </div>
    </section>
  );
}
