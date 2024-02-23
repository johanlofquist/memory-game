import { useState } from "react";

interface ICardProps {
  flag: "string";
}

export const Card = (props: ICardProps) => {
  const handleClick = () => {
    setToggled(!toggled);
  };

  const [toggled, setToggled] = useState(true);
  return (
    <div className="w-[200px] relative rounded" onClick={handleClick}>
      <img src={props.flag} alt="" className="w-full rounded" />
      <div
        className={`bg-red-500 rounded w-[200px] h-[150px] absolute top-0 transition ${
          toggled ? "opacity-1" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};
