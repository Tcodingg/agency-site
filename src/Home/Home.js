import React from "react";
import Categories from "./Categories";
import Services from "./Services";
import home_banner from "../images/home-banner.png";

function Home() {
  return (
    <div className="nave-pages">
      <header>
        <h1>Write for readers not for search engines.</h1>
      </header>
      <section>
        <div>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard.
          </p>
          <button>CHECK OUR PROJECTS</button>
        </div>

        <div className="img">
          <img src={home_banner} alt="home bunner" />
        </div>
      </section>

      <div className="categories-home">
        <Categories num="34" description="Happy Clients" />
      </div>
      <div>
        <h1>Service We Provide</h1>
        <p>
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>

        <div className="service-items">
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
