import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const App = () => {
  const boxRef = useRef();
  const circleRef = useRef();

  useGSAP(() => {
    gsap.to(boxRef.current, {
      rotate: 720,
      duration: 1,
      delay: 1,
    });

    gsap.from(circleRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  });

  return (
    <div className="h-[100vh] bg-[#111] text-[#fff] flex items-center justify-center gap-10">
      <div className="container1 p-5 border w-60 flex flex-col items-center justify-center rounded-xl">
        <div className="circle h-40 w-40 bg-blue-600 rounded-[50%] mb-2"></div>
        <div ref={boxRef} className="box h-40 w-40 bg-red-600 rounded"></div>
      </div>

      <div className="container2 p-5 border w-60 flex flex-col items-center justify-center rounded-xl">
        <div
          ref={circleRef}
          className="circle h-40 w-40 bg-green-600 rounded-[50%] mb-2"
        ></div>
        <div className="box h-40 w-40 bg-yellow-400 rounded"></div>
      </div>
    </div>
  );
};

export default App;
