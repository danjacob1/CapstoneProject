import React from "react";
import Specials from "./specials";
import About from "./about";
import TestimonialsContainer from "./testimonial";

const Main=()=>{

    return(
        <>  <main>
            <Specials/>
            <TestimonialsContainer/>
            <About/>
            </main>
        </>
    )
}

export default Main;