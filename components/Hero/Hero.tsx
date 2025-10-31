// Hero.tsx
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simplified variants (use `any` to avoid framer-motion type mismatches across lib versions)
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // keep easing unspecified to avoid strict typing issues across framer-motion versions
        // or provide a function/array compatible with your project's framer-motion types
      }
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Orbs with inline animations */}
      <motion.div 
        className={styles.backgroundOrb1}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          // cubic-bezier equivalent for easeInOut
          ease: [0.42, 0, 0.58, 1]
        }}
      />
      
      <motion.div 
        className={styles.backgroundOrb2}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          // cubic-bezier equivalent for easeInOut
          ease: [0.42, 0, 0.58, 1],
          delay: 1
        }}
      />
      
      {/* Floating Icons with inline animations */}
      <motion.div 
        className={styles.floatingIcon}
        style={{ left: '10%', top: '20%' }}
        animate={{
          y: [-10, 10, -10]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1]
        }}
      >
        ⚡
      </motion.div>

      <motion.div
        className={styles.heroContent}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Profile Image */}
        <motion.div className={styles.profileContainer} variants={itemVariants}>
          <div className={styles.profileImageWrapper}>
            <div className={styles.profileImage} />
            <div className={styles.profileGlow} />
          </div>
        </motion.div>

        <motion.h1 className={styles.heroTitle} variants={itemVariants}>
          Hey, I'm <span className={styles.nameHighlight}>Prateek Kushwah</span> 👋
        </motion.h1>
        
        <motion.div className={styles.titleDecoration} variants={itemVariants}>
          <div className={styles.decorationLine} />
          <div className={styles.decorationDot} />
        </motion.div>
        
        <motion.p
          className={styles.heroDescription}
          variants={itemVariants}
        >
          A passionate <span className={styles.highlight}>Full Stack Developer</span> crafting 
          digital experiences with modern tech and creative solutions. 
          I bring ideas to life through <span className={styles.highlight}>elegant code</span>.
        </motion.p>

        <motion.div
          className={styles.heroButtons}
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className={styles.primaryButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 40px rgba(216, 64, 64, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <div className={styles.buttonGlow} />
          </motion.a>
          
          <motion.a
            href="#contact"
            className={styles.secondaryButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(142, 22, 22, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.techTags}
          variants={itemVariants}
        >
          {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'MongoDB'].map((tech) => (
            <motion.div
              key={tech}
              className={styles.techTagWrapper}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
            >
              <div className={styles.techTag}>
                {tech}
                <div className={styles.tagGlow} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          variants={itemVariants}
        >
          <motion.div
            className={styles.scrollArrow}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;