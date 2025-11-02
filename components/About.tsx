// components/About.tsx
import styles from '@/styles/About.module.css';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '∞', label: 'Passion for Code' }
  ];

  const highlights = [
    'Clean, maintainable code architecture',
    'Performance optimization enthusiast',
    'UI/UX focused development',
    'Continuous learning mindset'
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Animated Background Elements */}
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
        
        <div className={styles.content}>
          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>
                <span className={styles.titleText}>Creative Developer</span>
                <span className={styles.titleShadow} aria-hidden="true">Creative Developer</span>
              </h2>
              <div className={styles.titleLine}></div>
            </div>
            <p className={styles.intro}>
              Crafting <span className={styles.highlight}>digital experiences</span> that 
              blend <span className={styles.highlight}>innovation</span> with{' '}
              <span className={styles.highlight}>purpose</span>
            </p>
          </div>

          <div className={styles.grid}>
            {/* Main Content */}
            <div className={styles.textContent}>
              <div className={styles.story}>
                <p className={styles.paragraph}>
                  I'm a passionate web developer who transforms complex problems into 
                  <strong> elegant solutions</strong>. With a keen eye for design and 
                  a love for clean code, I bridge the gap between 
                  <strong> visual appeal</strong> and <strong>technical excellence</strong>.
                </p>
                
                <p className={styles.paragraph}>
                  My journey in web development started with curiosity and has evolved 
                  into a commitment to creating <strong>impactful digital experiences</strong>. 
                  I believe in the power of technology to connect, inspire, and transform.
                </p>

                <div className={styles.highlights}>
                  {highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className={styles.highlightItem}
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    >
                      <div className={styles.highlightIcon}>
                        <div className={styles.iconDot}></div>
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats & Visual Elements */}
            <div className={styles.visualContent}>
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={styles.statCard}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={styles.statGlow}></div>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                    <div className={styles.statPulse}></div>
                  </div>
                ))}
              </div>

              {/* Code-like Visual Element */}
              <div className={styles.codeVisual}>
                <div className={styles.codeLine}>
                  <span className={styles.codeTag}>&lt;passion&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeProp}>innovation</span>
                  <span className={styles.codeOperator}>=</span>
                  <span className={styles.codeValue}>"continuous"</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeProp}>creativity</span>
                  <span className={styles.codeOperator}>=</span>
                  <span className={styles.codeValue}>"boundless"</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeTag}>&lt;/passion&gt;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={styles.cta}>
            <div className={styles.ctaLine}></div>
            <p className={styles.ctaText}>
              Ready to bring your next project to life?
            </p>
            <button className={`btn btn-primary ${styles.ctaButton}`}>
              Let's Connect
            </button>
            <div className={styles.ctaLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;