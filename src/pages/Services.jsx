import { Link } from 'react-router-dom'
import { Home, Building2, Star, Package } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import resImg from '../assets/res.png'
import airImg from '../assets/air.png'
import bathImg from '../assets/bath.png'
import kitImg from '../assets/kit.png'

const services = [
  {
    Icon: Home,
    image: resImg,
    title: 'Airbnb & Vacation Rental Cleaning',
    desc: 'Keep your short-term rental fresh, welcoming, and ready for every arrival with reliable, detail-oriented cleaning between stays.',
    includes: [
      'Kitchen cleaned and reset',
      'Bathrooms scrubbed and sanitized',
      'Floors vacuumed and mopped',
      'Surfaces and high-touch areas dusted',
      'Beds made and linens changed (on request)',
      'Final guest-ready walkthrough',
    ],
  },
  {
    Icon: Building2,
    image: airImg,
    title: 'Apartment Turnovers',
    desc: 'Prepare apartments for the next resident with a thorough turnover clean focused on the details that make a space feel fresh and move-in ready.',
    includes: [
      'Kitchen and appliance cleaning',
      'Bathroom scrubbing and sanitizing',
      'Cabinets and drawers wiped inside',
      'Baseboards, trim, and windowsills wiped',
      'All floors vacuumed and mopped',
      'Final move-in-ready walkthrough',
    ],
  },
  {
    Icon: Star,
    image: bathImg,
    title: 'Deep Cleaning',
    desc: 'Give your rental a complete refresh with detailed cleaning for hard-to-reach areas, built-up residue, and spaces that need extra attention.',
    includes: [
      'Detailed kitchen and appliance cleaning',
      'Bathrooms scrubbed from top to bottom',
      'Baseboards, fans, and blinds dusted',
      'Hard-to-reach areas cleaned',
      'Floors thoroughly vacuumed and mopped',
      'Complete detail-focused walkthrough',
    ],
  },
  {
    Icon: Package,
    image: kitImg,
    title: 'Short & Long-Term Rental Cleaning',
    desc: "Professional cleaning for rental properties across Atlanta, Georgia, with dependable service tailored to short-term stays and long-term tenancies.",
    includes: [
      'Service tailored to the rental schedule',
      'Kitchen and bathroom cleaning',
      'Dusting and surface care',
      'Floor vacuuming and mopping',
      'Trash removal throughout',
      'Detail-oriented final walkthrough',
    ],
  },
]

export default function Services() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Professional short-term and long-term rental cleaning in Atlanta, Georgia.</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="services-full-grid">
            {services.map(({ Icon, image, title, desc, includes }, i) => (
              <FadeIn key={title} delay={i * 100}>
              <div className="service-card-full">
                {image
                  ? <img src={image} alt={title} className="service-card-img" />
                  : <div className="service-icon" style={{ width: 64, height: 64 }}>
                      <Icon size={30} color="var(--green)" strokeWidth={1.75} />
                    </div>
                }
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="service-includes">
                  <h4>What's Included</h4>
                  <ul>
                    {includes.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


<section className="cta-banner">
        <div className="section-inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Reach out and we'll help you figure out the best fit for your situation.</p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </main>
  )
}
