import React from "react";
import { Link, useNavigate } from "react-router-dom";
import app_config from "../../config";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
// import {NavLink} from "react-router-dom";

import "./style-signup.css";
const Login = () => {
  const url = app_config.backend_url;
  // for sendind formdata to database

  //   4. Create Validation Schema
  // const phoneRegExp =
  //   '/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/';
  // const emailRegExp =
  //   '/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i';
  const myValidation = Yup.object().shape({
    username: Yup.string()
      .min(5, "UserName Must Five Letter") ,,..
      .max(20, "Too Long!")
      .required("UserName Required"),
    email: Yup.string()
      // .matches(emailRegExp, "Email Invalid")
      .required("Enter Email"),
    mobile: Yup.string()
      .min(10, "Enter Valid Mobile Number")
      .max(10, "Mobile Number Must Be 10 Digits")
      // .matches(phoneRegExp,"Mobile number is not valid")
      .required("Phone No Required"),
    password: Yup.string()
      .min(6, "Too Short!!")
      .max(12, "Very Long To Remember")
      .required("Password Required"),
  });
  const navigate = useNavigate();

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
                      <h1 style={{ padding: 10 }}>Login Form</h1>
                      <form>
                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline"> </div>
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
                        <Formik
                          initialValues={{
                            username: "",
                            email: "",
                            mobile: "",
                            password: "",
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
                          )}
                        </Formik>

                        <div style={{ float: "left" }}>
                          <button
                            type="submit"
                            class="btn btn-primary btn-block mb-4"
                            aria-controls="#picker-editor"
                          >
                            Log In
                          </button>
                          <button
                            component={Link}
                            to="./components/main/signup"
                            style={{ margin: "0 0 0 10px" }}
                            type="submit"
                            class="btn btn-success btn-block mb-4"
                            aria-controls="#picker-editor"
                            onClick={() => navigate("/main/signup")}
                          >
                            Sign Up
                          </button>
                        </div>
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

export default Login;
