import React, { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import main from "../assets/images/main.svg";
import bestPlace1 from "../assets/images/bestPlace1.jpg";
import bestPlace2 from "../assets/images/bestPlace2.jpg";
import bestPlace3 from "../assets/images/bestPlace3.jpg";
import "./Home.css";

const Home = () => {
  const { user } = useOutletContext();
  const name = user.username.charAt(0).toUpperCase() + user.username.slice(1);
  
  const emailRef = useRef(null); // Reference for email input

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscription successful! 🎉 Thank you for joining.", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });

    // Clear the input field after submission
    if (emailRef.current) emailRef.current.value = "";
  };

  return (
    <div className="homeContainerHome">
      <ToastContainer /> {/* Place this at the root of your component */}

      <section className="heroHome">
        <div className="heroContentHome">
          <h1 className="welcomeTextHome">Welcome, {name} 👋</h1>
          <h2 className="animateTextHome">Discover India's Hidden Gems</h2>
          <p className="descriptionHome">
            Trippify is your go-to travel companion, offering tailored itineraries, eco-friendly tourism options, and a seamless journey through the cultural wonders of India.
          </p>
          <Link to="/create-journal" className="primaryBtnHome">
            Create New Journal
          </Link>
        </div>
        <img src={main} alt="Explore India" className="heroImageHome" />
      </section>

      <section className="bestPlacesHome">
        <h2>Top Picks by Our Users</h2>
        <div className="placesGridHome">
          <div className="placeCardHome">
            <img src={bestPlace1} alt="Taj Mahal" />
            <div className="cardContentHome">
              <h3>Taj Mahal, Agra</h3>
              <p>Witness the epitome of love, one of the Seven Wonders of the World.</p>
            </div>
          </div>
          <div className="placeCardHome">
            <img src={bestPlace2} alt="Goa Beaches" />
            <div className="cardContentHome">
              <h3>Beaches of Goa</h3>
              <p>Unwind at vibrant beaches, known for sun, sand, and nightlife.</p>
            </div>
          </div>
          <div className="placeCardHome">
            <img src={bestPlace3} alt="Jaipur" />
            <div className="cardContentHome">
              <h3>Jaipur, Rajasthan</h3>
              <p>Explore the rich history and architecture of the Pink City.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="exploreSectionHome">
        <h2>Explore More Adventures</h2>
        <div className="exploreGridHome">
          <div className="exploreItemHome">Adventure</div>
          <div className="exploreItemHome">Culture</div>
          <div className="exploreItemHome">Wildlife</div>
          <div className="exploreItemHome">Pilgrimage</div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="testimonialsHome">
        <h2>What Our Users Say</h2>
        <div className="testimonialCardsHome">
          <div className="testimonialCardHome">
            <p>"Trippify made my trip to Jaipur unforgettable! The curated recommendations were spot on."</p>
            <h4>— Anjali, Mumbai</h4>
          </div>
          <div className="testimonialCardHome">
            <p>"I found the best eco-friendly travel options, all thanks to this platform."</p>
            <h4>— Ravi, Delhi</h4>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="whyUsHome">
        <h2>Why Choose Trippify?</h2>
        <div className="whyUsGridHome">
          <div className="whyUsItemHome">
            <h3>Eco-Friendly Options</h3>
            <p>Our itineraries focus on sustainability, helping you explore without harming nature.</p>
          </div>
          <div className="whyUsItemHome">
            <h3>Tailored Itineraries</h3>
            <p>Get personalized travel plans that suit your preferences and time.</p>
          </div>
          <div className="whyUsItemHome">
            <h3>24/7 Support</h3>
            <p>Our team is always here to help you make the most of your travels.</p>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="subscribeSectionHome">
        <h2>Join Our Newsletter</h2>
        <p>Stay updated on the latest travel trends and top destinations. Subscribe now!</p>
        <form className="subscribeFormHome" onSubmit={handleSubscribe}>
          <input type="email" placeholder="Enter your email" ref={emailRef} required />
          <button type="submit" className="primaryBtnHome">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footerHome">
        <p>© 2024 Trippify. All rights reserved.</p>
        <div className="socialLinksHome">
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
