import React from "react";
import { useState } from "react";
import check from'../../Util/icons8-instagram-check-mark-50.png'
import '../Reservation/reservation.css'
import { Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup'

const Reservation=()=>{
     
  const initialValues={
    date:"",
    time: "",
    guests: "",
    occasion: "",
    email: "",
    phone: ""
  };

  
    const validationScheme=Yup.object({
       date:Yup.date().required("Date is required").min(new Date(),"Date cannot be in the past"),
       time:Yup.string().required("Time is required"),
       guests:Yup.number().required("Guests number is required").min(1,"Minimun 1 guest").max(6,"Maximum 6 guests"),
       occasion:Yup.string().required("Occasion is requiered"),
       email:Yup.string().email("Invalid email address").matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      ).required("Email is required"),
       phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone number is required")

    })
     
    const handleSubmit = (values, { setSubmitting }) => {
      
        console.log(values);
        setSubmitting(false);
        setShowRegards(true);
        setEditable(false);
      };

     const[showRegards,setShowRegards]=useState(false);
    const[editable,setEditable]=useState(true);
    return(
        (
            <div className="section">
            <div className="form-container">
              <Formik
                initialValues={initialValues}
                validationSchema={validationScheme}
                onSubmit={handleSubmit}
                enableReinitialize={true}
              >
                <Form className="form">
                  <div className="top-form">
                    <label htmlFor="date">Choose Date</label>
                    <Field type="date" name="date" id="date" readOnly={!editable}/>
                    <ErrorMessage name="date" component="div" className="error-message" />
          
                    <label htmlFor="time">Choose Time</label>
                    <Field as="select" name="time" id="time" readOnly={!editable}>
                      <option value="">Select Time</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                    </Field>
                    <ErrorMessage name="time" component="div" className="error-message" />
                  </div>
                  
                   <div className="mid-form">
                    <label htmlFor="guests">Guests</label>
                    <Field type="number" name="guests" id="guests" readOnly={!editable}/>
                    <ErrorMessage name="guests" component="div"className="error-message"/>
                    
                    <label htmlFor="occasion">Occasion</label>
                    <Field as="select" name="occasion" id="occasion" readOnly={!editable}> 
                        <option value="Anniversary">Anniversary</option>
                        <option value="Birthday">Birthday</option>

                    </Field>
                    <ErrorMessage  name="occasion" component="div" className="error-message"/>

                   </div>
          
                  <div className="bottom-form">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email" readOnly={!editable} />
                    <ErrorMessage name="email" component="div" className="error-message" />
          
                    <label htmlFor="phone">Phone</label>
                    <Field type="tel" name="phone" id="phone" readOnly={!editable}/>
                    <ErrorMessage name="phone" component="div" className="error-message" />
                  </div>
          
                  <button type="submit" >Reserve Now</button>
                </Form>
              </Formik>
             
              {showRegards&&(
                    <div className="confirmation-container">
                      <p>Thank you for booking with us!</p>
                      <img alt="positive-img" src={check}></img>
                     </div>
                  )}  
                  
            </div>
           
            </div>
             )
        )
}

export default Reservation;