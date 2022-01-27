import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface setCorrectValueProps {
  value: number;
  setValue(value: number): void;
  maxValue: number;
}

export const setCorrectNumber = ({
  value,
  setValue,
  maxValue,
}: setCorrectValueProps) => {
  if (value >= maxValue) {
    setValue(maxValue);
    return;
  }

  if (value <= 1) {
    setValue(1);
    return;
  }

  setValue(value);
};

const Home: NextPage = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col max-w-screen-md w-11/12 py-8 md:py-12  bg-shape rounded-3xl items-center justify-center growUpAnimation ">
        <div className="relative w-56 md:w-64 h-24 transition-all duration-300">
          <Image
            src="/assets/logoQuiz.svg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <p className="mb-5 text-base md:text-lg mt-5 md:mt-0 md:mb-10 w-11/12 text-center">
          Digite quantas perguntas que deseja responder?
        </p>

        <input
          type="number"
          value={number}
          onChange={(e) =>
            setCorrectNumber({
              value: number,
              setValue: setNumber,
              maxValue: 100,
            })
          }
          className="bg-black w-28 h-24 border-2  border-black rounded-2xl text-red  text-5xl font-bold flex align-middle text-center focus:caret-red focus:border-red transition-all duration-200"
        />
        <p className="mb-8 mt-2 text-base">min: 1 max: 100</p>

        <Link href={`/question/${number}`}>
          <a>
            <button className="py-2 px-4 rounded-xl border-2 border-red bg-red font-bold text-2xl text-black hover:text-red hover:bg-transparent hover:border-red transition-colors duration-200 ">
              CONFIRM
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
