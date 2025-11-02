// components/Skills.tsx
import styles from '@/styles/Skills.module.css';

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>Skills & Technologies</span>
            <span className={styles.titleGlow} aria-hidden="true">Skills & Technologies</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies I <span className={styles.accentWord}>master</span> to bring digital 
            <span className={styles.accentWord}> visions</span> to life
          </p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={skill}
              className={styles.skillCard}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                '--card-index': index
              } as React.CSSProperties}
            >
              <div className={styles.skillGlow}></div>
              <span className={styles.skillText}>{skill}</span>
              <div className={styles.skillPulse}></div>
            </div>
          ))}
        </div>
        
        <div className={styles.footerNote}>
          <span className={styles.connectorLine}></span>
          <p>Continuously evolving with emerging technologies</p>
          <span className={styles.connectorLine}></span>
        </div>
      </div>
    </section>
  );
};

export default Skills;