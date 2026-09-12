const values = [
  ['01', 'Real ingredients', 'If we cannot say what is in it, it does not go in it.'],
  ['02', 'Bright ideas', 'A little curiosity makes everything taste better.'],
  ['03', 'Better together', 'Good food should leave the world in better shape.'],
];

export default function Values() {
  return <section className="values-band"><div className="page-width"><p className="eyebrow">The Frudex way</p><div className="values-grid">{values.map(([number, title, text]) => <article key={number}><span className="value-number">{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div></div></section>;
}
