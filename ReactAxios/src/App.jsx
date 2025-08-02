import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {/* <button className="data text-2xl bg-white text-black font-bold rounded cursor-pointer active:sc">
          Get Data
        </button> */}
        <div className="data text-xl bg-zinc-600 rounded">
          {data.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="data text-xl bg-zinc-900 rounded flex items-center justify-center"
              >
                <img
                  width="400"
                  src={elem.download_url}
                  alt="Image not found"
                />
                <h1>{elem.author}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
