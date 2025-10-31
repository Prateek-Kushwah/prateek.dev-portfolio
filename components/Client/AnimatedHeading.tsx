"use client";

import { motion } from 'framer-motion';
import React from 'react';

type AnimatedHeadingProps = React.ComponentProps<typeof motion.h2> & {
  children: React.ReactNode;
};

export default function AnimatedHeading(props: AnimatedHeadingProps) {
  const { children, ...rest } = props;
  return (
    <motion.h2 {...rest}>{children}</motion.h2>
  );
}
