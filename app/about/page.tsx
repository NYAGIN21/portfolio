'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>NYAGIN ILYA</h1> 
              <p className={styles.role}>Backend</p> 
              <div className={styles.location}>
                <span className={styles.dot} />
                Cheboksary, Russia 
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/NYAGIN21" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m a backend developer passionate about building fast and reliable systems. 
                I mainly work with the Go and Rust/Solana ecosystem, 
                building services that can handle high loads.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Backend</span>
                </div>
                <h3 className={styles.expRole}>Rust+GO</h3>
                <p className={styles.expCompany}>Own projects</p>
                <ul className={styles.expList}>
                  <li> <strong>FFI Integration:</strong> Calling Rust functions from Go using cgo. </li>
                  <li> <strong>gRPC Microservices:</strong> Go Gateway → Rust Server.  </li>
                  <li> <strong>Observability Stack:</strong> Collect metrics every 15 seconds (Prometheus)</li>
                  <li> <strong>Infrastructure:</strong> Containerization (Docker, Alpine). </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Backend</span>
                </div>
                <h3 className={styles.expRole}>Rust/Solana</h3>
                <p className={styles.expDesc}>
                  <strong>Blockchain game</strong> based on smart contracts.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Go</span>
                    <span className={styles.skillTag}>RUST</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}> — </span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>gRPC</span>
                    <span className={styles.skillTag}>Protobuf</span>
                    <span className={styles.skillTag}>FFI/cgo</span>
                    <span className={styles.skillTag}>tokio</span>
                    <span className={styles.skillTag}>Prometheus</span>
                    <span className={styles.skillTag}>Grafana</span>
                    <span className={styles.skillTag}>Docker</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>GitHub Actions</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>wrk/hey</span>
                    <span className={styles.skillTag}>Docker Compose</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Writing</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;ve had the pleasure of writing for some amazing publications 
                as a freelance technical author:
              </p>
              
              <div className={styles.writingLinks}>
                <a 
                  href="https://www.100ms.live/blog/author/nitin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>100ms Blog</span>
                  <VscLinkExternal size={14} />
                </a>
                
                <a 
                  href="https://blog.logrocket.com/author/nitinranganath/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>LogRocket Blog</span>
                  <VscLinkExternal size={14} />
                </a>
                
                <a 
                  href="https://dev.to/itsnitinr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>DEV.to</span>
                  <VscLinkExternal size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aside from programming and writing, I enjoy reading dystopian novels, 
                listening to calm piano music, or just enjoying some downtime.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
