import { useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';
import styles from './Dashboard.module.css';

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <TopAppBar />
      <main className={styles.mainContainer}>
        {/* Status Indicator Section */}
        <section className={styles.statusSection}>
          <div className={styles.iconWrapper}>
            <div className={styles.iconGlow}></div>
            <div className={styles.iconContainer}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--color-primary)', fontSize: '3rem' }}>wifi</span>
            </div>
          </div>
          <p className={styles.statusTitle}>Ready to Cast</p>
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot}></span>
            <span className={styles.badgeText}>Network Stable</span>
          </div>
        </section>

        {/* Main Action Section */}
        <section className={styles.actionSection}>
          <button className={styles.primaryButton} onClick={() => navigate('/share')}>
            Start Casting
          </button>
        </section>

        {/* Recently Connected Section */}
        <section>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recently Connected</h2>
            <span className={styles.sectionSubtitle}>History</span>
          </div>
          
          <div className={styles.devicesList}>
            {/* Device Card 1 */}
            <div className={styles.deviceCard}>
              <div className={styles.deviceInfo}>
                <div className={styles.deviceIcon}>
                  <span className="material-symbols-outlined">desktop_windows</span>
                </div>
                <div>
                  <p className={styles.deviceName}>Studio-PC-01</p>
                  <p className={styles.deviceMeta}>Last active 2h ago</p>
                </div>
              </div>
              <button className={styles.connectBtn}>Connect</button>
            </div>

            {/* Device Card 2 */}
            <div className={styles.deviceCard}>
              <div className={styles.deviceInfo}>
                <div className={styles.deviceIcon}>
                  <span className="material-symbols-outlined">laptop_mac</span>
                </div>
                <div>
                  <p className={styles.deviceName}>Work-Macbook-Pro</p>
                  <p className={styles.deviceMeta}>Last active yesterday</p>
                </div>
              </div>
              <button className={styles.connectBtn}>Connect</button>
            </div>
          </div>
        </section>
      </main>

      {/* Background Decorative Gradient */}
      <div className={styles.backgroundDecor}>
        <div className={styles.decorTopRight}></div>
        <div className={styles.decorBottomLeft}></div>
      </div>
      
      <BottomNavBar />
    </>
  );
}
