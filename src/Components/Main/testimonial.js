import React from "react";
import './testimonials.css'
//Persons
import albert from '../../Util/icons_assets/albert-dera-ILip77SbmOE-unsplash.jpg';
import campbell from '../../Util/icons_assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import ian from '../../Util/icons_assets/ian-dooley-d1UPkiFd04A-unsplash.jpg';
import prince from '../../Util/icons_assets/prince-akachi-i2hoD-C2RUA-unsplash.jpg';
//
import stars from'../../Util/icons_assets/icons8-star-48.png';
const testimonial=[

{rating:4,img:albert,name:"Albert",review:"Absolutely fantastic dining experience! The food was exquisite, bursting with flavor and beautifully presented"},
{rating:5,img:campbell,name:"Campbell",review:"A hidden gem! The food at this restaurant is outstanding, with each dish showcasing fresh, locally sourced ingredients"},
{rating:4,img:ian,name:"Ian",review:"An absolute delight! From the moment we walked in, we were greeted warmly and made to feel at home. "},
{rating:5,img:prince,name:"Prince",review:"Exceptional dining experience! The food at this restaurant is unparalleled, with each dish expertly crafted and bursting with flavor."}
];

const Testimonials=()=>{
      return(
        <>
            {
                testimonial.map((item,index)=>{
               return(
            <div className="testimonial-container" key={index}>
                <div className="star-container">
                    {
                       Array(item.rating).fill().map((_, index) =>(
                        <img key={index} src={stars} alt="star" />
                         )
                     )
                    }
                 </div>
                <div className="card-medium">
                  <img src={item.img} className="image-person" alt="person"></img>
                  <h1 >{item.name}</h1>
              </div>
              <p >{item.review}</p>
            </div>
               )
        })
     }   
        </>
    )
}

const TestimonialsContainer=()=>{
     
    return(

        <>     
         <section className="testimonial">
          <h1 className="testimonial-title">Testimonials</h1>
             <div className="section-container">
               <div className="items-container">
               <Testimonials/>
               </div> 
              </div>
              </section>
        </>
    )
}

export default TestimonialsContainer;