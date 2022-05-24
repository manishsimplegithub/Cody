import React from "react";
import "./style-signup.css";
const Home = () => {
  return (
    <div>
      <div data-draggable="true" styleName="position: relative">
        <section
          draggable="false"
          class="overflow-hidden pt-0"
          data-v-271253ee=""
        >
          <section class="mb-10 background-radial-gradient overflow-hidden">
            <div class="container px-4 py-5 px-md-5 text-center text-lg-start">
              <div class="row gx-lg-5 align-items-center mb-5">
                <div class="col-lg-6 mb-5 mb-lg-0" styleName="z-index: 10">
                  <h1
                    class="my-5 display-3 fw-bold ls-tight"
                    styleName="color: #ffffff"
                  >
                    <span style={{color : "white"}}>The best offer </span> <br />
                    <span style={{color : "white"}}>for your business</span>
                  </h1>
                  <p class="mb-4 opacity-70" style={{color : "white"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus, expedita iusto veniam atque, magni tempora
                    mollitia dolorum consequatur nulla, neque debitis eos
                    reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                  </p>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                  <div
                    id="radius-shape-1"
                    class="position-absolute rounded-circle shadow-5-strong"
                  ></div>
                  <div
                    id="radius-shape-2"
                    class="position-absolute shadow-5-strong"
                  ></div>
                  <div class="card bg-glass">
                    <div class="card-body px-4 py-5 px-md-5">
                    <h1 style={{padding : 10}}>Registration Form</h1>
                      <form>
                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              {/* <input
                                type="text"
                                id="form3Example1"
                                class="form-control"
                              /> */}
                              {/* <label
                                class="form-label"
                                for="form3Example1"
                                styleName="margin-left: 0px"
                              >
                                First name
                              </label> */}
                              {/* <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  styleName="width: 9px"
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  styleName="width: 68.8px"
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div> */}
                            {/* </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="form3Example2"
                                class="form-control"
                              /> */}
                              {/* <label
                                class="form-label"
                                for="form3Example2"
                                styleName="margin-left: 0px"
                              >
                                Last name
                              </label> */}
                              {/* <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  styleName="width: 9px"
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  styleName="width: 68px"
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div> */}
                            </div>
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            class="form-control active"
                            autocompleted=""
                          />
                          <label
                            class="form-label"
                            for="form3Example3"
                            styleName="margin-left: 0px"
                          >
                            Email address
                          </label>
                          <div class="form-notch">
                            <div
                              class="form-notch-leading"
                              styleName="width: 9px"
                            ></div>
                            <div
                              class="form-notch-middle"
                              styleName="width: 88.8px"
                            ></div>
                            <div class="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            class="form-control active"
                            autocompleted=""
                          />
                          <label
                            class="form-label"
                            for="form3Example4"
                            styleName="margin-left: 0px"
                          >
                            Password
                          </label>
                          <div class="form-notch">
                            <div
                              class="form-notch-leading"
                              styleName="width: 9px"
                            ></div>
                            <div
                              class="form-notch-middle"
                              styleName="width: 64.8px"
                            ></div>
                            <div class="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            class="form-control active"
                            autocompleted=""
                          />
                          <label
                            class="form-label"
                            for="form3Example3"
                            styleName="margin-left: 0px"
                          >
                            Username
                          </label>
                          <div class="form-notch">
                            <div
                              class="form-notch-leading"
                              styleName="width: 9px"
                            ></div>
                            <div
                              class="form-notch-middle"
                              styleName="width: 88.8px"
                            ></div>
                            <div class="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="number"
                            id="form3Example4"
                            class="form-control active"
                            autocompleted=""
                          />
                          <label
                            class="form-label"
                            for="form3Example4"
                            styleName="margin-left: 0px"
                          >
                            Age
                          </label>
                          <div class="form-notch">
                            <div
                              class="form-notch-leading"
                              styleName="width: 9px"
                            ></div>
                            <div
                              class="form-notch-middle"
                              styleName="width: 64.8px"
                            ></div>
                            <div class="form-notch-trailing"></div>
                          </div>
                        </div>

                        {/* <div class="form-check d-flex justify-content-center mb-4">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example33"
                            checked=""
                          />
                          <label class="form-check-label" for="form2Example33">
                            Subscribe to our newsletter
                          </label>
                        </div> */}

                        <button
                          type="submit"
                          class="btn btn-primary btn-block mb-4"
                          aria-controls="#picker-editor"
                        >
                          Sign up
                        </button>

                        {/* <div class="text-center">
                          <p>or sign up with:</p>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i
                              class="fab fa-facebook-f"
                              aria-controls="#picker-editor"
                            ></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i
                              class="fab fa-google"
                              aria-controls="#picker-editor"
                            ></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i
                              class="fab fa-twitter"
                              aria-controls="#picker-editor"
                            ></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i
                              class="fab fa-github"
                              aria-controls="#picker-editor"
                            ></i>
                          </button>
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
     
      
    </div>
  );
};

export default Home;
