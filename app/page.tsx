import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import type { Metadata } from "next";
import { motion } from 'framer-motion';
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import ClickSpark from '@/components/ClickSpark';
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });

export const metadata: Metadata = {
  title: "Prateek Kushwah | Web Developer",
  description:
    "Hey there! I'm Prateek Kushwah — a creative web developer, Minecraft YouTuber, and gamer. Check out my projects, coding skills, and digital adventures!",
  keywords: [
    "Prateek Kushwah",
    "Web Developer",
    "Frontend Developer",
    "Portfolio",
    "JavaScript",
    "Next.js",
    "React",
    "Minecraft",
    "YouTuber",
  ],
  authors: [{ name: "Prateek Kushwah", url: "https://your-portfolio-link.com" }],
  creator: "Prateek Kushwah",
  publisher: "WebPlayz",
  openGraph: {
    title: "Prateek Kushwah | Web Developer",
    description:
      "Explore my portfolio — coding projects, designs, and YouTube adventures all in one place!",
    url: "https://your-portfolio-link.com",
    siteName: "Prateek Kushwah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prateek Kushwah Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Kushwah | Web Developer & Minecraft Coder 💻🧱",
    description:
      "Check out my portfolio! Full of code, creativity, and Minecraft magic 💫",
    images: ["/og-image.png"],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  metadataBase: new URL("https://your-portfolio-link.com"),
};

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
      <ClickSpark
        sparkColor='#FF6A3D'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      />
      <Navbar />
      <Hero />
      <Projects />
      <Skills skills={mySkills} />
      <About />
      <Contact />
    </>
  );
};

export default Home;