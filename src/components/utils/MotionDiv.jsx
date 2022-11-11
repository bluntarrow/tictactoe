import { motion } from "framer-motion";

const MotionDiv = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className={className}
      children={children}
    />
  );
};

export default MotionDiv;
