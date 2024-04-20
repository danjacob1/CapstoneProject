import React from "react";
import './about.css'
import img1  from'../../Util/icons_assets/Mario and Adrian A.jpg'
import img2 from '../../Util//icons_assets/Mario and Adrian b.jpg'
const About=()=>{

    return(
        <>
          <section className="about-container">
                <article className="article">
                    <div className="article-left">
                    <h1>Little Lemon</h1>
             <p>Barcelona</p>
             <p>In the heart of downtown, Little Lemon was born from the shared dream of chefs Alex and Mia. Their friendship, forged in culinary school, led to the creation of a cozy restaurant where savory flavors and warm hospitality mingle. From abandoned space to vibrant eatery, every detail reflects their dedication to community and culinary excellence. Little Lemon is more than just a restaurant; it's a celebration of friendship, passion, and the joy of good food.At Little Lemon, culinary innovation meets tradition, as Alex and Mia infuse each dish with their unique flair and passion for quality ingredients. From savory classics to inventive creations, every bite tells a story of craftsmanship and dedication.</p>
                    </div >
                    <div className="article-right">
                          <img src={img1} alt="mario"></img>
                          <img src={img2} alt="adrian"></img>
                    </div>
                </article>
          </section>
         
        </>
    )
}

export default About;