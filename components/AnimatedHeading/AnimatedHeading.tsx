"use client";

import { motion } from 'framer-motion';
import React from 'react';

type Props = React.ComponentProps<typeof motion.h2> & {
  children: React.ReactNode;
};

const AnimatedHeading = ({ children, ...rest }: Props) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedHeading;
