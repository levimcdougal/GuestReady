import { Link } from 'react-router-dom'
import { Home, Building2, Star, Package } from 'lucide-react'
import cleanImg from '../assets/clean.png'
import FadeIn from '../components/FadeIn'
import heroBg from '../assets/back.png'
import gallery1 from '../assets/IMG1.jpg'
import gallery2 from '../assets/IMG2.jpg'
import gallery3 from '../assets/IMG3.jpg'
import gallery4 from '../assets/IMG4.jpg'
import gallery5 from '../assets/IMG5.jpg'
import gallery6 from '../assets/IMG6.jpg'
import gallery7 from '../assets/IMG7.jpg'

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7]

const reviews = [
  {
    name: 'Sarah M.',
    type: 'Vacation Rental Host',
    text: 'Absolutely incredible service. My rental has never looked this clean. They were on time, thorough, and paid attention to every detail. Will definitely book again!',
  },
  {
    name: 'James T.',
    type: 'Airbnb Host',
    text: 'I use them for all my Airbnb turnovers and my guests consistently rave about how clean the place is. They are fast, reliable, and my listings stay at 5 stars.',
  },
  {
    name: 'Maria L.',
    type: 'Apartment Turnover',
    text: 'Hired them for an apartment turnover and the entire place looked refreshed and ready for the next resident. The attention to detail was excellent!',
  },
  {
    name: 'David R.',
    type: 'Long-Term Rental Owner',
    text: 'We use them for our rental property and the difference is night and day. Professional, dependable, and consistently thorough every time.',
  },
]

const services = [
  {
    Icon: Home,
    title: 'Airbnb & Vacation Rentals',
    desc: 'Reliable, detail-oriented cleaning that gets your short-term rental ready for every guest.',
  },
  {
    Icon: Building2,
    title: 'Apartment Turnovers',
    desc: 'Thorough turnover cleaning that prepares apartments for the next resident quickly and carefully.',
  },
  {
    Icon: Star,
    title: 'Deep Cleaning',
    desc: 'Detailed top-to-bottom cleaning for rentals that need extra attention and a complete refresh.',
  },
  {
    Icon: Package,
    title: 'Short & Long-Term Rentals',
    desc: 'Professional cleaning for rental properties across Atlanta, tailored to the needs of each property.',
  },
]


export default function HomePage() {
  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-inner">
<h1>Guest-Ready Spaces.<br />Every Time.</h1>
<p>
            Professional short-term and long-term rental cleaning in Atlanta, Georgia. Reliable, detail-oriented, and ready for every turnover.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Cleaning Services for Every Need</h2>
            <p className="section-subtitle">
              From Airbnb and vacation rentals to apartment turnovers and deep cleaning, we help Atlanta properties stay guest-ready.
            </p>
          </div></FadeIn>
          <FadeIn delay={150}>
          <div className="services-grid">
            {services.map(({ Icon, title, desc }) => (
              <div className="service-card" key={title}>
                <div className="service-icon">
                  <Icon size={26} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/services" className="service-link">Learn more →</Link>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us */}
      <section className="section section-alt">
        <div className="section-inner">
          <FadeIn><div className="why-split">
            <div className="why-image-wrap">
              <img src={cleanImg} alt="Cleaning" className="why-image" />
            </div>
            <div className="why-content">
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title">The GuestReady Difference</h2>
              <p className="why-body">
                At GuestReady Cleaning, we understand that every rental needs to make a strong first impression.
                We serve short-term and long-term rental properties across Atlanta, Georgia, with reliable,
                detail-oriented cleaning designed for consistently welcoming spaces.
              </p>
              <p className="why-body">
                Whether you manage an Airbnb, vacation rental, or apartment turnover, you can count on
                professional, thorough service. We also provide deep cleaning when your property needs
                a more complete refresh.
              </p>
              <Link to="/contact" className="btn-primary why-cta">Get a Free Quote</Link>
            </div>
          </div></FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">Customer Reviews</p>
            <h2 className="section-title">What Our Clients Are Saying</h2>
            <p className="section-subtitle">
              Don't just take our word for it — here's what real customers have to say.
            </p>
          </div></FadeIn>
          <FadeIn delay={150}><div className="reviews-grid">
            {reviews.map(r => (
              <div className="review-card" key={r.name}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" strokeWidth={0} />
                  ))}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name[0]}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-type">{r.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section section-alt gallery-section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">Our Work</p>
            <h2 className="section-title">GuestReady Gallery</h2>
            <p className="section-subtitle">
              A look at the clean, welcoming spaces we prepare for guests and residents.
            </p>
          </div></FadeIn>
        </div>
        <FadeIn delay={150}>
          <div className="gallery-marquee">
            <div className="gallery-track">
              {[...galleryImages, ...galleryImages].map((image, index) => (
                <div
                  className="gallery-slide"
                  key={`${image}-${index}`}
                  aria-hidden={index >= galleryImages.length}
                >
                  <img
                    src={image}
                    alt={index < galleryImages.length ? `GuestReady Cleaning project ${index + 1}` : ''}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready for a Spotless Space?</h2>
          <p>Reach out today and let's make your place shine.</p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
