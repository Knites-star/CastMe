import { useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/TopAppBar';
import styles from './Manual.module.css';

export function Manual() {
  const navigate = useNavigate();

  return (
    <>
      <TopAppBar showBack={true} />
      <main className={styles.mainContainer}>
        <div className={styles.contentCard}>
          <div className={styles.headerRow}>
             <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }}>menu_book</span>
             <h1 className={styles.title}>CastMe User Manual</h1>
          </div>
          
          <div className={styles.divider}></div>

          <div className={styles.sectionsWrapper}>
             <section className={styles.section}>
                <h2>1. Getting Started</h2>
                <p>Welcome to CastMe! To begin casting your screen seamlessly, ensure both your device and the target screen are connected to the same local network or paired via Bluetooth.</p>
             </section>
             
             <section className={styles.section}>
                <h2>2. Discovering & Connecting Elements</h2>
                <p>Navigate to the <strong>Devices</strong> tab using the bottom navigation menu. The app's engine will automatically scan for available, high-resolution screens. Once your target device appears in the roster, click the <em>Connect</em> button to initialize a low-latency stream.</p>
             </section>
             
             <section className={styles.section}>
                <h2>3. Global Sharing</h2>
                <p>Want to invite a collaborator to cast? Head over to the Dashboard and construct a secure session, or generate an encrypted QR code directly from the <strong>Share</strong> page.</p>
             </section>

             <section className={styles.section}>
                <h2>4. Theme & Appearance Adjustments</h2>
                <p>In the <strong>Settings</strong> panel, adjust your visual interface instantly. Switch between <em>Auto</em>, <em>Light</em>, and <em>Dark</em> modes to match your spatial environment.</p>
             </section>
          </div>
          
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
             Return to Environment
          </button>
        </div>
      </main>
    </>
  );
}
