import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex justify-center items-center h-screen m-auto bg-gray-800">
      <motion.div
        className="border border-white rounded-lg p-8"
        initial={{ opacity: 0 }}
        animate={{ x: 100 }}>
        <h1 className="text-3xl font-bold text-white">
          Hello world!
        </h1>
      </motion.div>
    </div>
  );
}

export default App;
