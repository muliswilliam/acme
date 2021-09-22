import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import styles from '../styles/Login.module.scss';

export default function Login() {
  const router = useRouter();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate login network activity
    setTimeout(() => {
    }, 1500);
    setSubmitting(false);
    toast.success("Login successfull, redirecting...", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });

    // Redirect user to dashboard
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className={styles.login}>
      <div className="columns is-gapless">
        <div className="column">
          <div className={styles.left}>
            <div className={styles.left__content}>
              <h2 className={styles.left__heading}>ACME CRM</h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/illustration.png" alt="Office worker" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className={styles.right}>
            <div className={styles.right__intro}>
              <h3>Welcome</h3>
              <p>Please sign in to continue</p>
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  className={styles.loginForm}
                  onSubmit={e => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                >
                  {/* Email input */}
                  <div className="field mb-5">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        name="email"
                        className={`input`}
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>

                  {/* Password control */}
                  <div className="field mb-5">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        name="password"
                        className="input"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>
                  </div>

                  <a href="#" className={styles.loginForm__forgotPassword}>
                    Forgot password?
                  </a>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className={`button is-primary is-fullwidth ${isSubmitting ? 'is-loading' : ''
                      }`}
                    disabled={isSubmitting}
                  >
                    Sign In
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
