import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const boxRef = useRef();
  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <div className="h-[100vh] bg-[#111] text-[#fff] flex items-center justify-center gap-10 overflow-hidden">
      <div className="container1 p-5 w-60 flex flex-col items-center justify-center gap-10 rounded-xl">
        <div
          ref={boxRef}
          className="box h-40 w-40 bg-red-400 rounded-xl mb-2"
        ></div>
        <button
          onClick={rotateBox}
          className="px-6 py-2 bg-green-500 rounded-4xl border-none font-bold text-black active:scale-[0.9] cursor-pointer"
        >
          Animate
        </button>
      </div>
    </div>
  );
};

export default App;
