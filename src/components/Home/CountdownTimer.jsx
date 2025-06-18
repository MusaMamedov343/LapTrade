import { useState, useEffect } from "react";

import style from "./Shop.module.css";

export const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 10, minutes: 43 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes } = prevTime;
        if (minutes > 0) {
          return { hours, minutes: minutes - 1 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0 };
        }
      });
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={style.timer}>
      <p>
        {String(time.hours).padStart(2, "0")}:
        {String(time.minutes).padStart(2, "0")}
      </p>
    </div>
  );
};
