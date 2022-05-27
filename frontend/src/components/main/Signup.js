import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./style-signup.css";
import app_config from "../../config";

const url = app_config.backend_url;

const myValidation = Yup.object().shape({
  username: Yup.string()
    .min(5, "UserName Must Five Letter")
    .max(20, "Too Long!")
    .required("UserName Required"),
  email: Yup.string()
    // .matches(emailRegExp, "Email Invalid")
    .required("Enter Email"),

  password: Yup.string()
    .min(6, "Too Short!!")
    .max(12, "Very Long To Remember")
    .required("Password Required"),
});

const Signup = () => {
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
                    <span style={{ color: "white" }}>The best offer </span>{" "}
                    <br />
                    <span style={{ color: "white" }}>for your business</span>
                  </h1>
                  <p class="mb-4 opacity-70" style={{ color: "white" }}>
                    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus, expedita iusto veniam atque, magni tempora
                    mollitia dolorum consequatur nulla, neque debitis eos
                    reprehenderit quasi ab ipsum nisi dolorem modi. Quos? */}
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
                      <h1 style={{ padding: 10 }}>Registration Form</h1>
                      <Formik
                        initialValues={{
                          username: "",
                          email: "",

                          password: "",
                          age: "",
                        }}
                        validationSchema={myValidation}
                        onSubmit={(formdata) => {
                          // same shape as initial values
                          console.log(formdata);

                          fetch(url + "/user/add", {
                            method: "POST",
                            body: JSON.stringify(formdata),
                            headers: {
                              "Content-Type": "application/json",
                            },
                          })
                            .then((res) => res.json())
                            .then((data) => {
                              console.log(data);
                              Swal.fire({
                                icon: "success",
                                title: "Success",
                                text: "Registered Successfully",
                              });
                            });
                        }}
                      >
                        {({
                          values,
                          handleSubmit,
                          handleChange,
                          errors,
                          touched,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div class="row">
                              <div class="col-md-6 mb-4">
                                <div class="form-outline"></div>
                              </div>
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                class="form-control active"
                                value={values.email}
                                onChange={handleChange}
                                autocompleted=""
                              />
                              {errors.email && touched.email ? (
                                <div className="signup-error">
                                  {errors.email}
                                </div>
                              ) : null}
                              <label
                                class="form-label"
                                for="email"
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
                                values={values.password}
                                onChange={handleChange}
                                // placeholder="password"
                                id="password"
                                class="form-control active"
                                value={values.password}
                                autocompleted=""
                              />

                              {errors.password && touched.password ? (
                                <div className="signup-error">
                                  {errors.password}
                                </div>
                              ) : null}
                              <label
                                class="form-label"
                                for="password"
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
                                type="username"
                                id="username"
                                value={values.username}
                                onChange={handleChange}
                                class="form-control active"
                                autocompleted=""
                              />
                              {errors.username && touched.username ? (
                                <div className="signup-error">
                                  {errors.username}
                                </div>
                              ) : null}
                              <label
                                class="form-label"
                                for="username"
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
                                id="age"
                                value={values.age}
                                onChange={handleChange}
                                class="form-control active"
                                autocompleted=""
                              />
                              {errors.age && touched.age ? (
                                <div className="signup-error">{errors.age}</div>
                              ) : null}

                              <label
                                class="form-label"
                                for="age"
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
                            <button
                              type="submit"
                              class="btn btn-primary btn-block mb-4"
                              aria-controls="#picker-editor"
                            >
                              Sign up
                            </button>
                          </form>
                        )}
                      </Formik>
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

export default Signup;
