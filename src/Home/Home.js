import React, { useEffect } from "react";
import Categories from "./Categories";
import Services from "./Services";
import home_banner from "../images/home-banner.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="nave-pages">
      <header className="head">
        <h1>Write for readers not for search engines.</h1>
      </header>
      <section>
        <div>
          <p>
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard.
          </p>
          <button>CHECK OUR PROJECTS</button>
        </div>

        <div className="img-1">
          <img src={home_banner} alt="home bunner" />
        </div>
      </section>

      <div className="categories-home">
        <Categories num="34" description="Happy Clients" />
        <Categories num="34" description="Happy Clients" />
        <Categories num="34" description="Happy Clients" />
      </div>
      <div data-aos="fade-up">
        <h1>Service We Provide</h1>
        <p>
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>

        <div data-aos="fade-up" className="service-items">
          <Services
            service="Website Development"
            description="We design professional looking yet simple websies. OUr designs are search engle and user friendly"
          />
          <Services
            service="Website Development"
            description="We design professional looking yet simple websies. OUr designs are search engle and user friendly"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
