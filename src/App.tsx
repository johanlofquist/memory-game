import ugandaImg from "./assets/uganda.jpg";
import arubaImg from "./assets/aruba.jpg";
import bruneiImg from "./assets/brunei.jpg";
import fijiImg from "./assets/fiji.jpg";
import hondurasImg from "./assets/honduras.jpg";
import jordanImg from "./assets/jordan.jpg";
import lebanonImg from "./assets/lebanon.jpg";
import srilankaImg from "./assets/srilanka.jpg";
import { Card } from "./Card";
import { useEffect, useState } from "react";

function App() {
  const flagArray = [
    ugandaImg,
    arubaImg,
    bruneiImg,
    fijiImg,
    hondurasImg,
    jordanImg,
    lebanonImg,
    srilankaImg,
    ugandaImg,
    arubaImg,
    bruneiImg,
    fijiImg,
    hondurasImg,
    jordanImg,
    lebanonImg,
    srilankaImg,
  ];

  const copyFlagArray = [...flagArray];
  const newRandomFlagArray: any = [];

  while (copyFlagArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * copyFlagArray.length);
    newRandomFlagArray.push(copyFlagArray[randomIndex]);
    copyFlagArray.splice(randomIndex, 1);
  }

  // const [chosenCardOne, setChosenCardOne] = useState("");
  // const [chosenCardTwo, setChosenCardTwo] = useState("");

  // const setChosenCards = (flag: string) => {
  //   console.log(chosenCardOne);
  //   console.log(chosenCardTwo);
  //   if (chosenCardOne === "") {
  //     setChosenCardOne(flag);
  //   } else if (chosenCardTwo === "") {
  //     setChosenCardTwo(flag);
  //   }

  //   if (
  //     chosenCardOne === chosenCardTwo &&
  //     (chosenCardOne !== "" || chosenCardTwo !== "")
  //   ) {
  //     console.log("Paired!");
  //   }
  // };

  return (
    <>
      <div className="flex flex-wrap max-w-[900px] mx-auto mt-10 gap-4">
        {newRandomFlagArray.map((flag: any, index: number) => (
          <Card key={index} flag={flag} />
        ))}
      </div>
    </>
  );
}

export default App;
