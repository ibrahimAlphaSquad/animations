import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex justify-center items-center h-screen m-auto bg-gray-800">
      <motion.div
        className="border border-white rounded-lg p-8"
        initial={{ scale: 0,x:100 }}
        animate={{
          scale: 1,
          rotate: 360,
          x: 0,
          backgroundColor: "#000",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          duration: 3,
        }}
      >
        <h1 className="text-3xl font-bold text-white">Hello world!</h1>
      </motion.div>
    </div>
  );
}

export default App;
