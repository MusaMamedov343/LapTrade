import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import style from "./Elements.module.css";

export const StarRating = ({ rating, size }) => {
  const stars = [];
  const normalizedRating = Math.max(0, Math.min(5, rating));

  for (let i = 1; i <= 5; i++) {
    if (normalizedRating >= i) {
      stars.push(
        <FaStar
          style={{ fontSize: `${size}` }}
          key={i}
          className={style.starFilled}
        />
      );
    } else if (normalizedRating > i - 1 && normalizedRating < i) {
      stars.push(
        <div key={i}>
          <FaStarHalfAlt
            style={{ fontSize: `${size}` }}
            className={style.halfFilled}
          />
        </div>
      );
    } else {
      stars.push(
        <FaRegStar
          style={{ fontSize: `${size}` }}
          key={i}
          className={style.starEmpty}
        />
      );
    }
  }

  return <div className={style.stars}>{stars}</div>;
};
