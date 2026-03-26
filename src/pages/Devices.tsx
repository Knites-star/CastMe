import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';
import styles from './Devices.module.css';

export function Devices() {
  return (
    <>
      <TopAppBar title="Lumina Cast" />
      <main className={styles.mainContainer}>
        {/* Scanning Indicator */}
        <div className={styles.scanningSection}>
          <div className={styles.scannerWrapper}>
            <div className={styles.scannerRingOuter}>
              <div className={styles.scannerDot}></div>
            </div>
            <div className={styles.scannerRingInner}></div>
          </div>
          <div className={styles.scannerText}>
            <h1 className={styles.scannerTitle}>Scanning for devices</h1>
            <p className={styles.scannerSubtitle}>Searching Wi-Fi & Bluetooth</p>
          </div>
        </div>

        {/* Device List Container */}
        <div className={styles.deviceList}>
          {/* Device Item: Gaming-PC-1 */}
          <div className={styles.deviceItem}>
            <div className={styles.deviceInfo}>
              <div className={styles.deviceIcon}>
                <span className="material-symbols-outlined navIcon">desktop_windows</span>
              </div>
              <div>
                <h3 className={styles.deviceName}>Gaming-PC-1</h3>
                <p className={styles.deviceMeta}>Local Network • 192.168.1.45</p>
              </div>
            </div>
            <button className={styles.connectBtn}>Connect</button>
          </div>

          {/* Device Item: MacBook Pro */}
          <div className={styles.deviceItem}>
            <div className={styles.deviceInfo}>
              <div className={styles.deviceIcon}>
                <span className="material-symbols-outlined navIcon">laptop_mac</span>
              </div>
              <div>
                <h3 className={styles.deviceName}>MacBook Pro</h3>
                <p className={styles.deviceMeta}>Bluetooth • Ready to pair</p>
              </div>
            </div>
            <button className={styles.connectBtn}>Connect</button>
          </div>

          {/* Device Item: Studio-Display */}
          <div className={styles.deviceItem}>
            <div className={styles.deviceInfo}>
              <div className={styles.deviceIcon}>
                <span className="material-symbols-outlined navIcon">monitor</span>
              </div>
              <div>
                <h3 className={styles.deviceName}>Studio-Display</h3>
                <p className={styles.deviceMeta}>Local Network • 192.168.1.12</p>
              </div>
            </div>
            <button className={styles.connectBtn}>Connect</button>
          </div>
        </div>

        {/* Help Section */}
        <div className={styles.helpGrid}>
          <div className={styles.helpCard}>
            <span className={styles.helpLabel}>Troubleshooting</span>
            <h4 className={styles.helpTitle}>Can't find your device?</h4>
            <p className={styles.helpDesc}>Ensure both devices are on the same network and Lumina Cast is running on the target machine.</p>
            <a href="#" className={styles.helpLink}>
              View Network Guide
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div className={styles.tipCard}>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk7h4chY0Vcdz1JVey2ylZOwKMVx-mF_0ldNfqm0pQg-WajZjvYSL04jXiSxrxTJiWeRmV6Acot6LWzTGeVnNWMQvUuPSjdiCMrh20nMcojb_vFzkRt80c2v4pIHtyDIlhE0syjmCopIdQ4g6wWi-Uh83y-X8nXxcBxj1sglDbt80kXkHkW--ErYqsjR-NGDCePG45s_PxxaDyceul9ie6QlTkh9z4GNJ3D5kcJ99eUlswUn_lvJDm1s3JhL2qwocNuM_t3RrIiHA" 
              alt="Hardware abstract" 
              className={styles.tipImage} 
            />
            <div className={styles.tipGradient}></div>
            <div className={styles.tipContent}>
              <span className={styles.tipBadge}>Pro Tip</span>
              <p className={styles.tipText}>Lower latency via USB-C connection</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}
