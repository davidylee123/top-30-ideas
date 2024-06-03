import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

function Hero() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        Top 30 Productive ideas to become a SWE
      </h2>
      <h2 className="text-center my-3">
        <strong className="text-secondary">Like your favorite ideas.</strong>
        Write your best Ideas, No account needed!
      </h2>
      <div>
        <select
          onChange={(event) => setTheme(event.target.value)}
          className="select select-bordered border-primary w-full max-w-xs"
        >
          <option disabled selected>
            Select Theme
          </option>
          <option>light</option>
          <option>dark</option>
          <option>emerald</option>
          <option>retro</option>
          <option>aqua</option>
          <option>forest</option>
          <option>lofi</option>
          <option>autumn</option>
          <option>winter</option>
          <option>night</option>
        </select>
      </div>
    </div>
  );
}

export default Hero;
