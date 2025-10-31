import dynamic from 'next/dynamic';

import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Prateek Kushwah - Creative Developer</title>
        <meta name="description" content="Passionate developer crafting digital experiences with modern tech" />
      </Head>
        <Hero />
        <Projects/>
        
    </>
  );
};

export default Home;