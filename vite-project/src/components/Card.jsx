import React from 'react';
import {AiFillStar} from "react-icons/ai";
import {BsFillBagFill} from "react-icons/bs";
import './Card.css';

const Card = ({img, title, star, reviews, newPrice, prevPrice}) => {
  return (
    <>
      <section className="card">
        <img
          className={'card-image'}
          src={img}
          alt={title}
          loading="lazy"
        />

        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star}{star}{star}{star}
            <span className="total-reviews">{reviews}</span>
          </section>

          <section className={'card-price'}>
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>

            <div className="bag">
              <BsFillBagFill className={'bag-icon'}/>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;