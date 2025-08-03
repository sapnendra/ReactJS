import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const App = () => {
  const randomX = gsap.utils.random(-500, 500, 100);
  const rotateBox = gsap.utils.random(-720, 720, 30);
  const randomY = gsap.utils.random(-400, 400, 100);

  const [xValue, setXValue] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [yValue, setYValue] = useState(0);

  const boxRef = useRef();

  useGSAP(
    () => {
      gsap.to(boxRef.current, {
        x: xValue,
        y: yValue,
        rotate: rotate,
        duration: 0.5,
      });
    },
    { scope: "container1", dependencies: [xValue, rotate, yValue] }
  );

  return (
    <div className="h-[100vh] bg-[#111] text-[#fff] flex items-center justify-center gap-10 overflow-hidden">
      <div className="container1 p-5 w-60 flex flex-col items-center justify-center gap-10 rounded-xl">
        <div
          ref={boxRef}
          className="box h-40 w-40 bg-red-400 rounded-xl mb-2 absolute z-[1]"
        ></div>
        <button
          onClick={() => {
            setXValue(randomX);
            setRotate(rotateBox);
            setYValue(randomY);
          }}
          className="px-6 py-2 bg-green-500 rounded-4xl border-none font-bold text-black active:scale-[0.9] absolute z-[2] cursor-pointer"
        >
          Animate
        </button>
      </div>
    </div>
  );
};

// const App = () => {
//   const container1Ref = useRef();

//   useGSAP(
//     () => {
//       gsap.from(".box", {
//         rotate: 360,
//         scale: 0,
//         opacity: 0,
//         duration: 1,
//         delay: 1,
//       });
//     },
//     { scope: container1Ref }
//   );

//   return (
//     <div className="h-[100vh] bg-[#111] text-[#fff] flex items-center justify-center gap-10">
//       <div ref={container1Ref} className="container1 p-5 border w-60 flex flex-col items-center justify-center rounded-xl">
//         <div className="circle h-40 w-40 bg-blue-600 rounded-[50%] mb-2"></div>
//         <div className="box h-40 w-40 bg-red-600 rounded"></div>
//       </div>

//       <div className="container2 p-5 border w-60 flex flex-col items-center justify-center rounded-xl">
//         <div className="circle h-40 w-40 bg-green-600 rounded-[50%] mb-2"></div>
//         <div className="box h-40 w-40 bg-yellow-400 rounded"></div>
//       </div>
//     </div>
//   );
// };

export default App;
