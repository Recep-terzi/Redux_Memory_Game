import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, selectCard } from "../../redux/cardSlice/cardsSlice";
import "./Card.Module.css";

const Card = () => {
  const count = useSelector((state) => state.cards.item);
  const dispatch = useDispatch();
  const [selectedCards, setSelectedCards] = useState([]);
  const handleClick = (item) => {
    setSelectedCards([...selectedCards, item]);
  };
  useEffect(() => {
    setTimeout(() => {
      if (selectedCards[0].img === selectedCards[1].img) {
        console.log("doğru");
      } else {
        console.log("Yanlış");
      }
    }, 500);
  }, [selectedCards]);
  console.log(selectedCards);

  return (
    <div id="app">
      <div className="playground">
        {count.map((item) => (
          <div
            className={item.status ? "card opened" : "card opened"}
            key={item.id}
            onClick={() => dispatch(selectCard(item.id)) && handleClick(item)}
          >
            <div className="front"> ? </div>
            <div className="back">
              <img src={item.img} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
