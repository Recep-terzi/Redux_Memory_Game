import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, selectCard } from "../../redux/cardSlice/cardsSlice";
import "./Card.Module.css";

const Card = () => {
  const count = useSelector((state) => state.cards.item);
  const dispatch = useDispatch();
  const divRef = useRef();
  const [selectedCards, setSelectedCards] = useState([]);
  const [trueCard, setTrueCard] = useState(false);
  const handleClick = (item) => {
    setSelectedCards([...selectedCards, item]);
  };
  useEffect(() => {
    setTimeout(() => {
      switch (selectedCards[0].img === selectedCards[1].img) {
        case true:
          console.log("doğru");

          break;

        default:
          break;
      }
      // if (selectedCards[0].img === selectedCards[1].img) {

      //   setTrueCard(true);
      //   setSelectedCards.splice(0, selectedCards.length);
      // } else {
      //   console.log("Yanlış");
      //   setTrueCard(false);
      // }
    }, 500);
  }, [selectedCards]);
  console.log(selectedCards, trueCard);

  return (
    <div id="app">
      <div className="playground">
        {count.map((item) => (
          <div
            ref={divRef}
            className={`${item.status ? "card opened " : "card "} `}
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
