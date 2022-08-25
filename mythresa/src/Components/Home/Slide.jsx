import React from "react";
import Item from "./Item";
// import Carousel from "react-elastic-carousel";
import "./slide.css";

const breakPoints = [
  { width: 650, itemsToShow: 4 },
  { width: 850, itemsToShow: 4 },
  { width: 1000, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

export const Slide = () => {
  return (
    <div>
      <div className="App2" style={{ backgroundColor: "white" }}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/77/P00687756.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/df/P00637477.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/26/P00654429.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d1/P00648859.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/5d/P00644759.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ea/P00647795.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9f/P00674234.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d0/P00645340.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/8c/P00636073.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/26/P00654429.jpg"
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

export const Slide2 = () => {
  return (
    <div>
      <div className="App2" style={{ backgroundColor: "white" }}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9d/P00635938.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f2/P00636087.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/21/P00647910.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ef/P00646751.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2d/P00655749.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e1/P00623536.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/5d/P00635934.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2a/P00616612.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/dc/P00637720.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/7d/P00647221.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/96/P00619440.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e1/P00623536.jpg"
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

// Mens Clothing Slider...(NOT USED YET)
export const Slide5 = () => {
  return (
    <div>
      <div className="App2" style={{ backgroundColor: "white" }}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/30/P00590556.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/69/P00590557.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f4/P00590558.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9f/P00674234.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/b4/P00637472.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/0d/P00590559.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4e/P00637484.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/3c/P00645335.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/17/P00596056.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/aa/P00595951.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/42/P00628534.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/21/P00613461.jpg"
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

export const Slide3 = () => {
  return (
    <div>
      <div className="App2" style={{ backgroundColor: "white" }}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f2/P00613464.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/37/P00613421.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/6c/P00613459.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/3f/P00689875.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/b5/P00641997.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/61/P00656579.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a8/P00611787.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c4/P00634814.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/17/P00596056.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/aa/P00595951.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/b3/P00651507.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/21/P00613461.jpg"
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

// Womens Clothing Slider...
export const Slide4 = () => {
  return (
    <div>
      <div className="App2" style={{ backgroundColor: "white" }}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9d/P00635938.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f2/P00636087.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/21/P00647910.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ef/P00646751.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2d/P00655749.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e1/P00623536.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/5d/P00635934.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2a/P00616612.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/dc/P00637720.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/7d/P00647221.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/96/P00619440.jpg"
              alt=""
            />
          </Item>
          <Item>
            <img
              src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e1/P00623536.jpg"
              alt=""
            />
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

// Mens Eye Wears