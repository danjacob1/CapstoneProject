import React, { useState, useEffect } from "react";
import check from '../../Util/icons8-instagram-check-mark-50.png';
import '../Reservation/reservation.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const fetchAPI = (date) => {
  const times = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
  return times;
};

const submitAPI = (formData) => {
  return fetch('https://example.com/submit-reservation', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return true;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return false;
    });
};

const Reservation = () => {
  const initialValues = {
    date: "",
    time: "",
    guests: "",
    occasion: "",
    email: "",
    phone: ""
  };

  const validationSchema = Yup.object({
    date: Yup.date().required("Date is required").min(new Date(), "Date cannot be in the past"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number().required("Guests number is required").min(1, "Minimum 1 guest").max(6, "Maximum 6 guests"),
    occasion: Yup.string().required("Occasion is required"),
    email: Yup.string().email("Invalid email address").matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    ).required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone number is required")
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [showRegards, setShowRegards] = useState(false);
  const [editable, setEditable] = useState(true);

  useEffect(() => {
    const today = new Date();
    setAvailableTimes(fetchAPI(today));
  }, []);

  const handleDateChange = (setFieldValue, e) => {
    const selectedDate = e.target.value;
    setAvailableTimes(fetchAPI(new Date(selectedDate)));
    setFieldValue('date', selectedDate);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }

    if (submitAPI(formData)) {
      alert("Booking successful!");
      setShowRegards(true);
      setEditable(false);
    } else {
      alert("Booking failed. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div className="section">
      <h1 className="list-title">Reserve a Table</h1>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ setFieldValue }) => (
            <Form className="form">
              <div className="top-form">
                <label htmlFor="date">Choose Date</label>
                <Field type="date" name="date" id="date" readOnly={!editable} onChange={(e) => handleDateChange(setFieldValue, e)} />
                <ErrorMessage name="date" component="div" className="error-message" />

                <label htmlFor="time">Choose Time</label>
                <Field as="select" name="time" id="time" readOnly={!editable}>
                  <option value="">Select Time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </Field>
                <ErrorMessage name="time" component="div" className="error-message" />
              </div>

              <div className="mid-form">
                <label htmlFor="guests">Guests</label>
                <Field type="number" name="guests" id="guests" readOnly={!editable} />
                <ErrorMessage name="guests" component="div" className="error-message" />

                <label htmlFor="occasion">Occasion</label>
                <Field as="select" name="occasion" id="occasion" readOnly={!editable}>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Birthday">Birthday</option>
                </Field>
                <ErrorMessage name="occasion" component="div" className="error-message" />
              </div>

              <div className="bottom-form">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" readOnly={!editable} />
                <ErrorMessage name="email" component="div" className="error-message" />

                <label htmlFor="phone">Phone</label>
                <Field type="tel" name="phone" id="phone" readOnly={!editable} />
                <ErrorMessage name="phone" component="div" className="error-message" />
              </div>

              <button type="submit">Reserve Now</button>
            </Form>
          )}
        </Formik>

        {showRegards && (
          <div className="confirmation-container">
            <p>Thank you for booking with us!</p>
            <img alt="positive-img" src={check}></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;
