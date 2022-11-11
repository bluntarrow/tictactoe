// init framer
import { useEffect, useState } from "react";
import MotionDiv from "../components/utils/MotionDiv";

const Home = () => {
  const [round, setRound] = useState(1);
  const [boxes, setBoxes] = useState([]);
  const [isX, setIsX] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const resetGame = () => {
    setBoxes([]);
    for (let i = 0; i < 9; i++) {
      setBoxes((boxes) => [...boxes, { id: i, value: null }]);
    }
  };
  const setValue = (id, value) => {
    const bx = boxes;
    bx[id].value = value;
    setBoxes([...bx]);
  };

  const evaluate = () => {
    const endGame = () => {
      resetGame();
      setRound(round + 1);
      !isX ? setXScore(xScore + 1) : setOScore(oScore + 1);
    };

    if (boxes.length > 0) {
      for (let i = 0; i < 9; i += 3) {
        if (
          boxes[i].value == boxes[i + 1].value &&
          boxes[i + 1].value == boxes[i + 2].value &&
          boxes[i].value != null
        ) {
          endGame();
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          boxes[i].value == boxes[i + 3].value &&
          boxes[i + 3].value == boxes[i + 6].value &&
          boxes[i].value != null
        ) {
          endGame();
        }
      }
      if (
        boxes[0].value == boxes[4].value &&
        boxes[4].value == boxes[8].value &&
        boxes[0].value != null
      ) {
        endGame();
      }
      if (
        boxes[2].value == boxes[4].value &&
        boxes[4].value == boxes[6].value &&
        boxes[2].value != null
      ) {
        endGame();
      }
    }
  };

  useEffect(() => {
    resetGame();
  }, []);
  useEffect(() => {
    evaluate();
  }, [boxes]);
  return (
    <MotionDiv>
      <div className="h-screen w-screen grid grid-cols-2 p-20  gap-10">
        <ul className="grid grid-cols-3 grid-rows-3 items-center rounded">
          {boxes.map(({ id, value }) => (
            <li
              key={id}
              className="border border-gray-600 aspect-square flex justify-center items-center text-8xl font-thin text-gray-600 capitalize cursor-pointer"
              onClick={() => {
                if (!value) {
                  isX ? setValue(id, "X") : setValue(id, "O");
                  setIsX((isX) => !isX);
                }
              }}
            >
              {value && value}
            </li>
          ))}
        </ul>

        <div className="flex flex-col h-full">
          <div className="bg-gray-700 p-10 text-3xl text-center text-gray-50">
            Round {round}
          </div>
          <div className="h-full grid grid-cols-2">
            <div className="flex flex-col items-center justify-center text-gray-700 gap-10">
              <h6 className="text-5xl">{xScore}</h6>
              <h1 className="text-7xl">X</h1>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-700 gap-10">
              <h6 className="text-5xl">{oScore}</h6>
              <h1 className="text-7xl">O</h1>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Home;
