"use client";
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <div className="auth-page-wrapper pt-5">
  <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
    <div className="bg-overlay" />
    <div className="shape">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1440 120"
      >
        <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
      </svg>
    </div>
  </div>
  <div className="auth-page-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center mt-sm-5 mb-4 text-white-50">
            <div>
              <a href="index.html" className="d-inline-block auth-logo">
                {/* <img src="assets/images/logo-light.png" alt="" height={20} /> */}
              </a>
            </div>
            <p className="mt-3 fs-15 fw-medium">
              NIAM ADMIN  LOGIN
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="card mt-4">
            <div className="card-body p-4">
              <div className="text-center mt-2">
                <h5 className="text-primary">Welcome Back !</h5>
                <p className="text-muted">Sign in to continue to NIAM.</p>
              </div>
              <div className="p-2 mt-4">
                <form action="https://themesbrand.com/velzon/html/default/index.html">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="float-end">
                      <a
                        href="auth-pass-reset-basic.html"
                        className="text-muted"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <label className="form-label" htmlFor="password-input">
                      Password
                    </label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                      <input
                        type="password"
                        className="form-control pe-5 password-input"
                        placeholder="Enter password"
                        id="password-input"
                      />
                      <button
                        className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                        type="button"
                        id="password-addon"
                      >
                        <i className="ri-eye-fill align-middle" />
                      </button>
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="auth-remember-check"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="auth-remember-check"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-success w-100" type="submit">
                      Sign In
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="signin-other-title">
                      <h5 className="fs-13 mb-4 title">Sign In with</h5>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-icon waves-effect waves-light"
                      >
                        <i className="ri-facebook-fill fs-16" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-icon waves-effect waves-light"
                      >
                        <i className="ri-google-fill fs-16" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark btn-icon waves-effect waves-light"
                      >
                        <i className="ri-github-fill fs-16" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-icon waves-effect waves-light"
                      >
                        <i className="ri-twitter-fill fs-16" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="mb-0">
              Don't have an account ?{" "}
              <a
                href="auth-signup-basic.html"
                className="fw-semibold text-primary text-decoration-underline"
              >
                {" "}
                Signup{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <p className="mb-0 text-muted">
              © 2023 Velzon. Crafted with <i className="mdi mdi-heart text-danger" />{" "}
              by Themesbrand
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}
