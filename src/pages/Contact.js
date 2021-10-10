import React from "react";

import { motion } from "framer-motion";
import { pageAnimation } from "../animate";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>contact me at bharatsapra777@gmail.com</h2>
    </motion.div>
  );
};

export default Contact;
