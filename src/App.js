import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [rangeX_axis, setRangeX_axis] = useState(0);
  const [rangeY_axis, setRangeY_axis] = useState(0);
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div className="flex justify-center items-center h-screen m-auto bg-gray-800">
      <motion.div
        className="border border-white rounded-lg p-8"
        initial={{ scale: 0}}
        animate={{
          scale: 1,
          backgroundColor: "#000",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 1.5 }}
      >
        <motion.h1
          animate={{
            x: [rangeX_axis + "px"],
            y: rangeY_axis + "px",
          }}
          className="text-3xl font-bold text-white"
        >
          Hello world!
        </motion.h1>
        <div className="flex justify-center items-center space-x-2">
          <label className="text-xl font-bold text-white" htmlFor="rangeX_axis">
            X :
          </label>
          <input
            id="rangeX_axis"
            type="range"
            max={100}
            min={-100}
            value={rangeX_axis}
            onChange={(e) => {
              setRangeX_axis(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center items-center space-x-2">
          <label className="text-xl font-bold text-white" htmlFor="rangeY_axis">
            Y :
          </label>
          <input
            id="rangeY_axis"
            type="range"
            max={100}
            min={-100}
            value={rangeY_axis}
            onChange={(e) => {
              setRangeY_axis(e.target.value);
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
