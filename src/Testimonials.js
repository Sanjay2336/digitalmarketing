import React from 'react';
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <blockquote>
            "Digital Marketing Pros helped us increase our online presence and grow our customer base. Their expertise and dedication are unmatched."
          </blockquote>
          <p>- John Doe, CEO of XYZ Company</p>
        </div>
        <div className="testimonial">
          <blockquote>
            "We saw immediate results after partnering with Digital Marketing Pros. Their team is responsive and highly skilled in the digital marketing field."
          </blockquote>
          <p>- Jane Smith, Marketing Director at ABC Inc.</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;