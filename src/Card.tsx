import { useState } from "react";
import { Flag } from "./models/Flag";

interface ICardProps {
  flag: Flag;
  compareCards: (img: string) => void
  flipCard: (id: number) => void
}

export const Card = ({ flag, compareCards, flipCard }: ICardProps) => {
  const [toggled, setToggled] = useState(true);
  
  const handleClick = () => {
    compareCards(flag.img);
    flipCard(flag.id);
  };

  return (
    <div className="w-[200px] relative rounded" onClick={handleClick}>
      <img src={flag.img} alt="" className="w-full rounded" />
      <div
        className={`bg-red-500 rounded w-[200px] h-[150px] absolute top-0 transition ${
          !flag.isOpen ? "opacity-1" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};
