import ugandaImg from "./assets/uganda.jpg";
import arubaImg from "./assets/aruba.jpg";
import bruneiImg from "./assets/brunei.jpg";
import fijiImg from "./assets/fiji.jpg";
import hondurasImg from "./assets/honduras.jpg";
import jordanImg from "./assets/jordan.jpg";
import lebanonImg from "./assets/lebanon.jpg";
import srilankaImg from "./assets/srilanka.jpg";
import { Card } from "./Card";
import { Flag } from "./models/Flag";
import { useState } from "react";

function App() {
  const flagArray: Flag[] = [
    { img: arubaImg, id: 1, isOpen: false },
    { img: bruneiImg, id: 2, isOpen: false },
    { img: fijiImg, id: 3, isOpen: false },
    { img: hondurasImg, id: 4, isOpen: false },
    { img: jordanImg, id: 5, isOpen: false },
    { img: lebanonImg, id: 6, isOpen: false },
    { img: srilankaImg, id: 7, isOpen: false },
    { img: ugandaImg, id: 8, isOpen: false },
    { img: arubaImg, id: 9, isOpen: false },
    { img: bruneiImg, id: 10, isOpen: false },
    { img: fijiImg, id: 11, isOpen: false },
    { img: hondurasImg, id: 12, isOpen: false },
    { img: jordanImg, id: 13, isOpen: false },
    { img: lebanonImg, id: 14, isOpen: false },
    { img: srilankaImg, id: 15, isOpen: false },
    { img: ugandaImg, id: 16, isOpen: false },
  ];

  const [shouldRandomize, setShouldRandomize] = useState(true);
  const [flags, setFlags] = useState<Flag[]>();
  const [isFound, setIsFound] = useState<string[]>([])

  const randomizeFlags = () => {
    const copyFlagArray = [...flagArray];
    const newRandomFlagArray: Flag[] = [];
    while (copyFlagArray.length > 0) {
      if (shouldRandomize) {
        const randomIndex = Math.floor(Math.random() * copyFlagArray.length);
        newRandomFlagArray.push(copyFlagArray[randomIndex]);
        copyFlagArray.splice(randomIndex, 1);
      }
    }
    setFlags(newRandomFlagArray);
    setShouldRandomize(false);
  };

  let openCards: string[] = [];

  const compareCards = (flagImg: string) => {
    openCards.push(flagImg);
    let matched = openCards[0] === openCards[1];

    if (openCards.length === 1) {
      console.log("Second card flipped");
      if (matched) {
        console.log('Match found!');
        openCards = [];
      } else {
        setFlags((flags?.map(flag => {
          if (isFound.includes(flag.img)) {
          return {...flag, isOpen: !flag.isOpen}
          } else {
            return flag
          }
        })))
      }
    }
  };

  const flipCard = (flagId: number) => {
    if (flags) {
      setFlags(flags.map(flag => {
        if (flag.id === flagId) {
          return {...flag, isOpen: !flag.isOpen }
        } else {
          return flag
        }
      }))
    }
  };

  return (
    <>
      <button onClick={randomizeFlags}>Starta nytt spel</button>
      <div className="flex flex-wrap max-w-[900px] mx-auto mt-10 gap-4">
        {flags?.map((flag: Flag, index: number) => (
          <Card
            key={index}
            flag={flag}
            compareCards={compareCards}
            flipCard={flipCard}
          />
        ))}
      </div>
    </>
  );
}

export default App;
