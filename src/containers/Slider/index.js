import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  let time = null;
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  // BUGSORT added a null Check for byDateDesc
  // Added a clearTimeout
  // Added -1 after "byDateDesc.Length" for the slide to not go 'out of bound'
  const nextCard = () => {
    if (byDateDesc) {
      time = setTimeout(
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
        3000
      );
    }
  };
  useEffect(() => {
    clearTimeout(time);
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"
            }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>

      ))}

      {/* BUGSORT 
      - Uncapsuled this entire part wich was in the
      previous map() to make it detached from each slide element 
      and not re-render for no reason on every single slide 
      - Also added onChange() to respect the convention 
      - Could modify this to onClick if we wanted 
      to switch slide with the radio buttons */}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => (
            <input
              key={`${event.title}`}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={() => { }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
