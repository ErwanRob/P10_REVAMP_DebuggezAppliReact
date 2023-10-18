import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => (
  <div
    data-testid="card-testid"
    className={`EventCard${small ? " EventCard--small" : ""}`}
    {...props}
  >
    <div className="EventCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      <div className="EventCard__label">{label}</div>
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title">{title}</div>
      <div className="EventCard__month">{getMonth(date)}</div>
    </div>
  </div>
);



// BUGSORT Removed isRequired and attributed a default value
// This way we handle the undefined status of the elements
// by ignoring them since the structure is not well thought,
// and element WILL be undefined at start anyways.
EventCard.propTypes = {
  /* imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, */
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  small: PropTypes.bool,
};

// BUGSORT
EventCard.defaultProps = {
  imageSrc: "Img did not load",
  title: "title did not load",
  label: "Label did not load",
  imageAlt: "image",
  small: false,
}

export default EventCard;











/* 
EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
} */