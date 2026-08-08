import { ArrowDownRight, ShieldCheck, Sparkles, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="eyebrow"><Sparkles size={15} /> Thoughtfully selected</span>
        <h1>Everyday pieces,<br /><em>made remarkable.</em></h1>
        <p>Discover useful, beautiful goods chosen to bring a little more intention to your daily routine.</p>
        <a className="primary-button" href="#collection">Explore collection <ArrowDownRight size={18} /></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-card card-one"><span>New arrivals</span><strong>24</strong></div>
        <div className="hero-card card-two"><span>Member rating</span><strong>4.8</strong></div>
        <div className="hero-monogram">N</div>
      </div>
      <div className="benefits">
        <span><Truck size={18} /> Free delivery over $75</span>
        <span><ShieldCheck size={18} /> 30-day easy returns</span>
        <span><Sparkles size={18} /> Curated quality</span>
      </div>
    </section>
  );
}
