import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Expectations from "../components/Expectations";
import CTA from "../components/CTA";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section exceed_expectations">
        <Expectations />
      </section>
      <section className="section CTA">
        <CTA />
      </section>
      <section className="section blog_section">
        <Blog />
      </section>
      <section class="section footer_section">
        <Footer />
      </section>
    </>
  );
};

export default Home;
