import React from "react";
import Categories from "./Categories";
import Services from "./Services";
import image from "../images/home-banner.png";

function Home() {
  return (
    <div className="nave-pages">
      <header>
        <h1>Write for readers not for search engines.</h1>
      </header>
      <section>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard.
        </p>
      </section>
      <div className="button">
        <button>CHECK OUR PROJECTS</button>
      </div>
      <div className="img">
        <img src={image} alt="home bunner" />
      </div>

      <div className="categories-home">
        <Categories num="34" description="Happy Clients" />
      </div>
      <div>
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
  );
}

export default Home;
