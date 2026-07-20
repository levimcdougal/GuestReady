import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              GuestReady Cleaning
            </div>
            <p className="footer-tagline">
              Professional short-term and long-term rental cleaning in Atlanta, Georgia. Reliable, detail-oriented service for every stay and turnover.
            </p>
          </div>

          <div className="footer-col footer-col-services">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Airbnb &amp; Vacation Rentals</Link></li>
              <li><Link to="/services">Apartment Turnovers</Link></li>
              <li><Link to="/services">Deep Cleaning</Link></li>
              <li><Link to="/services">Rental Cleaning</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              <Phone size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              520-343-6169<br />
              <MessageSquare size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              520-343-6169<br />
              <Mail size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              guestready@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {year} GuestReady Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
