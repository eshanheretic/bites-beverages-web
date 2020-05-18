import React, { Component } from "react";

import AddButton from "./AddButton/AddButton";
import "./FoodMenu.scss";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";

export default class FoodMenu extends Component {
  constructor() {
    super();
    this.state = {
      menuItems: [],
      ready: false,
    };
  }

  componentDidMount() {
    const menuItems = this.fetchMenuItems();
    this.setState({
      menuItems,
      ready: true,
    });
  }

  renderMenuItems = (menuItems) => {
    return (
      <div className="menu-card-main flex-card">
        {menuItems.map((menuItem, i) => {
          const { foodImageId, foodName, foodDesc, price } = menuItem;
          return (
            <div key={i} className="menu-card flex-col">
              <div className="menu-card-header">
                <img
                  className="food-image"
                  src={require("../../assets/images/" + foodImageId)}
                  alt=""
                />
              </div>
              <div className="menu-card-body flex-col flex-1 justify-space-between">
                <div className="line-height-1">
                  <div className="food-name mb-1">{foodName}</div>
                  <div className="food-desc">
                    {foodDesc.length > 45
                      ? foodDesc.substring(0, 45) + "..."
                      : foodDesc}
                  </div>
                </div>
              </div>
              <div className="menu-card-footer flex-row justify-space-between align-items-center">
                <div className="menu-card-price">Rs. {price}</div>
                <React.Fragment>
                  <AddButton />
                </React.Fragment>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  loading = () => <div style={{ textAlign: "center" }}>Loading...</div>;

  render() {
    const { menuItems } = this.state;
    return (
      <div className="flex-container">
        <RestaurantInfo />
        <div className="food-menu-main">
          {this.state.ready ? this.renderMenuItems(menuItems) : this.loading()}
        </div>
      </div>
    );
  }

  fetchMenuItems = () => {
    return [
      {
        foodImageId: "food2.jpg",
        foodName: "Cheese Dosa",
        foodDesc:
          "Tasty dosa with lots and lots of extra cheese and more cheese",
        price: "70",
      },
      {
        foodImageId: "food3.jpg",
        foodName: "Farmhouse Pizza",
        foodDesc: "With all the toppings you love",
        price: "150",
      },
      {
        foodImageId: "food4.jpg",
        foodName: "Cheeseburst Pizza",
        foodDesc: "Bursting cheese",
        price: "175",
      },
      {
        foodImageId: "food5.jpg",
        foodName: "Burger",
        foodDesc: "Burger loaded with veggies",
        price: "60",
      },
      {
        foodImageId: "food6.jpg",
        foodName: "Fries",
        foodDesc: "Veg fries",
        price: "120",
      },
      {
        foodImageId: "food7.jpg",
        foodName: "Paneer Crispy",
        foodDesc: "Some crispies",
        price: "100",
      },
      {
        foodImageId: "food8.jpg",
        foodName: "Panner Pakoda",
        foodDesc: "Give it a try",
        price: "50",
      },
      {
        foodImageId: "food9.jpg",
        foodName: "Panner Chilly",
        foodDesc: "Panner with chilly",
        price: "130",
      },
      {
        foodImageId: "food10.jpg",
        foodName: "Coke",
        foodDesc: "Ask for diet",
        price: "80",
      },
      {
        foodImageId: "food11.jpg",
        foodName: "Veg Thali",
        foodDesc: "2 Sabji, 3 Chappati, Dal, Rice, Sweet, Lassi, Achar",
        price: "200",
      },
      {
        foodImageId: "food12.jpg",
        foodName: "Panner Tikka Masala",
        foodDesc: "Tikka of Masala",
        price: "120",
      },
      {
        foodImageId: "food13.jpg",
        foodName: "Triple Schezwan Rice",
        foodDesc: "Triple the Schezwana",
        price: "250",
      },
      {
        foodImageId: "food2.jpg",
        foodName: "Cheese Dosa",
        foodDesc: "Again Cheese Dosa",
        price: "50",
      },
    ];
  };
}
