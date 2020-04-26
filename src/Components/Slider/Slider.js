import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";
import "./Slider.scss";

class Slider extends React.Component {
  render() {
    return (
      <div className="Carousel">
        <Carousel
          arrows
          centered
          autoPlay={4000}
          animationSpeed={2000}
          breakpoints={{
            640: {
              slidesPerPage: 1,
              arrows: false,
            },
            900: {
              slidesPerPage: 2,
              arrows: false,
            },
          }}
          infinite
        >
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          <img src="https://thumbs.dreamstime.com/b/soya-chaap-masala-indian-dish-36948902.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Bhalla_Papri_Chaat_with_saunth_chutney.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Chole_Bhature_on_the_street.jpg" />
          <img src="https://www.roughguides.com/wp-content/uploads/2015/10/masala-dosa-shutterstock_785766178-840x560.jpg" />
          <img src="https://www.yummyfoodrecipes.in/resources/picture/org/Marathi-dish.jpg" />
        </Carousel>
      </div>
    );
  }
}
export default Slider;
