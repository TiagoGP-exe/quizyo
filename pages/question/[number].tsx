import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setCorrectNumber } from "..";
import LogoMode from "../../components/LogoMode";

const PreviousButton =
  "border-red bg-transparent text-red hover:text-shape hover:bg-red hover:border-red transition-colors duration-200";

const Question = () => {
  const {
    query: { number },
  } = useRouter();

  const [atualQuestion, setAtualQuestion] = useState(1);

  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    setCorrectNumber({
      value: Number(number),
      setValue: setMaxValue,
      maxValue: 100,
    });
  }, [number]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex flex-col max-w-screen-md w-11/12 bg-shape rounded-3xl items-center justify-center growUpAnimation ">
        <div className="flex  bg-black w-full py-2 px-4 md:px-8 rounded-t-3xl items-center text-shape justify-between rounded-b-sm">
          <div className="relative w-36  md:w-48 h-16 transition-all duration-300">
            <Image
              src="/assets/logoQuizWhite.svg"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="flex gap-x-4 border-2 border-red rounded-sm px-2 py-1">
            <h2 className="text-lg md:text-2xl text-red">
              QUEStion {atualQuestion}
            </h2>
          </div>
        </div>

        <div className="flex flex-col p-5 gap-y-5 w-full">
          <header>
            <p className="text-base font-semibold text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel eleifend neque. Curabitur sit amet felis quis turpis viverra
              ultricies. Nulla facilisi
            </p>
          </header>
          <section className="flex flex-col w-full gap-y-2 items-center">
            <div className="w-full py-2 px-4 bg-green growUpAnimation text-base rounded-xl">
              <p>aaaaa</p>
            </div>
            <div className="w-full py-2 px-4 bg-green growUpAnimation text-base rounded-xl">
              <p>aaaaa</p>
            </div>
            <div className="w-full py-2 px-4 bg-green growUpAnimation text-base rounded-xl">
              <p>aaaaa</p>
            </div>
            <div className="w-full py-2 px-4 bg-green growUpAnimation text-base rounded-xl">
              <p>aaaaa</p>
            </div>
          </section>
          <div className="w-full flex justify-between ">
            <button
              disabled={atualQuestion === 1}
              className={`py-2 px-4 border-2 rounded-xl font-bold text-xl ${
                atualQuestion === 1 ? "disabled" : PreviousButton
              }`}
              onClick={() => setAtualQuestion((e) => (e <= 1 ? 1 : --e))}
            >
              PREVIOUS
            </button>
            <button
              onClick={() => setAtualQuestion((e) => ++e)}
              className="py-2 px-4 rounded-xl border-2 border-red bg-red font-bold text-xl text-shape hover:text-red hover:bg-transparent hover:border-red transition-colors duration-200 "
            >
              NEXT
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Question;
