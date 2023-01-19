import React from "react";

const HiddenContent = () => {
  return (
    <div className="">
      <div className=" flex-col text-center w-full">
        <h1 className="token-head text-5xl font-bold   tracking-normal">
          SABIFI TOKEN
        </h1>
        <hr className="hr-line mx-auto w-64 w h-2  rounded border-0 md:my-4 "></hr>
      </div>
      <div className="accordion py-12" id="myAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              type="button"
              className="accordion-button collapsed text-white font-bolder text-3xl"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              What is NFTs?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div className="card-body text-xl text-white">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                sit sapiente deleniti deserunt. Nihil, harum expedita. Iusto
                veniam esse est. Deserunt animi autem consequatur id numquam
                corporis ipsum, laborum iste quidem nulla dolore magni tempore
                harum, blanditiis et qui unde eveniet. Itaque quidem ullam
                perferendis magnam illum odit deleniti qui! HTML stands for
                HyperText Markup Language. HTML is the standard markup language
                for describing the structure of web pages.{" "}
                <a
                  href="https://www.tutorialrepublic.com/html-tutorial/"
                  target="_blank"
                >
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              type="button"
              className="accordion-button text-white font-bolder text-3xl"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              What is Sabifi?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            data-bs-parent="#myAccordion"
          >
            <div className="card-body text-xl text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                est, illo eos eveniet, delectus sapiente, fuga eius fugit maxime
                magnam suscipit doloribus? Maiores dolorem numquam error
                assumenda, veniam debitis ex, temporibus, magnam enim fuga animi
                id voluptatum. Fugiat eum, nisi quis quae voluptatem neque, sit
                nulla culpa iste dignissimos at? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aut labore totam corporis error
                esse, quidem, minus maxime est rerum atque voluptate nesciunt
                perspiciatis vitae quos excepturi temporibus! Suscipit ut,
                minima neque impedit dicta corporis consectetur nemo reiciendis.
                Eius, possimus ducimus. Minus minima dicta enim laudantium vel
                quisquam officiis, accusamus aut fuga culpa in a molestiae
                aliquam, excepturi dolores expedita maiores nesciunt incidunt,
                voluptates perspiciatis cumque possimus? Suscipit impedit quae
                voluptatibus nemo! Quos repellendus hic aspernatur ut quod quo
                aliquam quis magnam sed repudiandae quisquam, iste ducimus
                cumque atque excepturi laudantium? Sed beatae molestias expedita
                id earum accusamus veritatis voluptatibus optio! Bootstrap is a
                sleek, intuitive, and powerful front-end framework for faster
                and easier web development. It is a collection of CSS and HTML
                conventions.{" "}
                <a
                  href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/"
                  target="_blank"
                >
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              type="button"
              className="accordion-button collapsed text-white font-bolder text-3xl"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              What is Sabswap?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div className="card-body text-xl text-white">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                numquam consequatur rerum reiciendis recusandae cum vitae
                aperiam odio quasi optio? Inventore dignissimos, sed
                exercitationem eveniet, corrupti ab molestiae, voluptatum
                deserunt aliquid excepturi in omnis laboriosam officia dolor ad
                sequi. Maiores minus quisquam saepe corporis velit adipisci, ut
                facere rerum debitis excepturi veritatis veniam! Dicta, eos?
                Vero minima voluptatem quo. Repellendus consequuntur nesciunt,
                natus, eaque reprehenderit vitae odit laboriosam ad quae earum
                facilis? Quasi, a voluptas unde qui magnam voluptate eveniet
                laborum recusandae cum nisi praesentium dolores, quisquam,
                labore necessitatibus. Enim modi doloribus perspiciatis fugiat
                dignissimos quibusdam, et consequuntur officia est! CSS stands
                for Cascading Style Sheet. CSS allows you to specify various
                style properties for a given HTML element such as colors,
                backgrounds, fonts etc.{" "}
                <a href="https://www.sabifi.io/" target="_blank">
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenContent;
