import React from "react";
import Carousel from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";
import "./Slider.scss";

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }
  render() {
    return (
      <div className="Carousel">
        <Carousel
          slidesPerPage={3}
          arrows
          centered
          onChange={(val) =>
            this.setState({ value: val})
          }
          value={this.state.value}
          autoPlay={4000}
          animationSpeed={2000}
          breakpoints={{
            400:{
              slidesPerPage:1,
              arrows:false
            },
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
          <img alt='' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img alt='' src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          <img alt='' src="https://thumbs.dreamstime.com/b/soya-chaap-masala-indian-dish-36948902.jpg" />
          <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Bhalla_Papri_Chaat_with_saunth_chutney.jpg" />
          <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/1/16/Chole_Bhature_on_the_street.jpg" />
          <img alt='' src="https://www.roughguides.com/wp-content/uploads/2015/10/masala-dosa-shutterstock_785766178-840x560.jpg" />
          <img alt='' src="https://www.yummyfoodrecipes.in/resources/picture/org/Marathi-dish.jpg" />
        </Carousel>
      </div>
    );
  }
}
export default Slider;
