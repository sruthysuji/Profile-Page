import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "/avatar.jpg", // Use a valid path for the default avatar
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Simulated loading state

  // Simulate fetching user data
  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "johndoe@example.com",
        avatar: "/avatar.jpg",
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    try {
      // Mock submission logic
      setUser({
        ...user,
        name: values.name,
        email: values.email,
      });
      setSubmitting(false);
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Display error if it exists

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-info">
        {/* Avatar Section */}
        <div className="avatar">
          {user.avatar ? (
            <img src={user.avatar} alt="Avatar" />
          ) : (
            <div className="avatar-placeholder">
              {user.name ? user.name[0].toUpperCase() : "?"}
            </div>
          )}
        </div>

        {/* User Info Section */}
        <h2>{user.name || "Your Name"}</h2>
        <p>{user.email || "Your Email"}</p>

        {/* Form Section */}
        <Formik
          enableReinitialize // Ensures Formik updates when `initialValues` change
          initialValues={{ name: user.name, email: user.email }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProfilePage;
