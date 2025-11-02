import dynamic from 'next/dynamic';

import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from '@/components/Navbar';
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });

const Home: NextPage = () => {
  const mySkills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'CSS3',
    'HTML5',
    'Git',
    'REST APIs',
    'Tailwind CSS',
    'Redux',
    'MongoDB',
    'Express.js',
    'Jest',
    'Webpack',
    'Vite'
  ];
  return (
    <>
      <Head>
        <title>Prateek Kushwah - Creative Developer</title>
        <meta name="description" content="Passionate developer crafting digital experiences with modern tech" />
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <Skills skills={mySkills} />
      <About/>
    </>
  );
};

export default Home;