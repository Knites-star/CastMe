import { TopAppBar } from '../components/TopAppBar';
import styles from './ShareApp.module.css';

export function ShareApp() {
  return (
    <>
      <TopAppBar showBack={true} />
      <main className={styles.mainContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <span className={styles.heroLabel}>Spread the Light</span>
          <h1 className={styles.heroTitle}>
            Share the <span className={styles.heroTitleItalic}>Experience</span>
          </h1>
          <p className={styles.heroDesc}>
            Invite others to cast their screens with CastMe. Professional-grade collaboration starts with a simple invitation.
          </p>
        </section>

        {/* Share Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Link Copy Card */}
          <div className={styles.copyCard}>
            <div>
              <div className={styles.cardIconHover}>
                <span className="material-symbols-outlined navIcon">content_copy</span>
              </div>
              <h3 className={styles.cardTitle}>Copy Link</h3>
              <p className={styles.cardDesc}>Quickly copy the unique casting URL to your clipboard.</p>
            </div>
            
            <div className={styles.cardFooter}>
              <span>castme.io/v/shared-access</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>open_in_new</span>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className={styles.whatsappCard}>
            <div className={styles.whatsappIconBox}>
              <span className="material-symbols-outlined navIcon">chat_bubble</span>
            </div>
            <div className={styles.socialText}>
              <h4 className={styles.socialTitle}>WhatsApp</h4>
              <span className={styles.socialSubtitle}>Instant Messaging</span>
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>

          {/* Slack & Email Cards */}
          <div className={styles.slackCard}>
            <div className={styles.socialRoundIcon}>
              <span className="material-symbols-outlined navIcon" style={{ color: 'var(--color-tertiary)' }}>workspaces</span>
            </div>
            <span className={styles.socialTitleCentered}>Slack</span>
          </div>

          <div className={styles.emailCard}>
            <div className={styles.socialRoundIcon}>
              <span className="material-symbols-outlined navIcon" style={{ color: 'var(--color-secondary)' }}>mail</span>
            </div>
            <span className={styles.socialTitleCentered}>Email</span>
          </div>

          {/* QR Code Card */}
          <div className={styles.qrCard}>
            <div className={styles.qrGlow}></div>
            <div className={styles.qrImageBox}>
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKr4fSHw6frBg3qcfXW8rx0ddmWbKI1gzpUFBVd9cmTGXqkE-KP9krI-wjL7p6h8AFZrexMs9uoc2D6Q5hDx2DbJw8URJv8LrkhHv_e5_Ip_Y0qhFKlMls7NbZ_9lopMlobi0MGJrjqTy11vX5XRufWcJsJf7UDMCDD1R5Fl_bpmBhJEi7FDpL9AoThL2Sdm-necHd3TQb-S4529U-inJ5T2V3FciHKyY_uRPRKtbxag2VrRkTIWSbrQmhOG9H7NVGvzqHKkhAjhs" alt="QR Code" />
            </div>
            
            <div className={styles.qrTextContent}>
               <h3 className={styles.cardTitle}>Scan for Instant Access</h3>
               <p className={styles.cardDescLong}>Point your camera at this code to join the session immediately without typing any links.</p>
               <div className={styles.qrBadgeRow}>
                  <span className={styles.badgePrimary}>Expiring in 24h</span>
                  <span className={styles.badgeSecondary}>Encrypted</span>
               </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footerSection}>
          <div className={styles.footerFeatures}>
             <div className={styles.featureItem}>
                <span className="material-symbols-outlined">security</span>
                <span>End-to-End Encrypted</span>
             </div>
             <div className={styles.featureItem}>
                <span className="material-symbols-outlined">bolt</span>
                <span>Ultra Low Latency</span>
             </div>
             <div className={styles.featureItem}>
                <span className="material-symbols-outlined">visibility_off</span>
                <span>Private Sessions</span>
             </div>
          </div>
          <p className={styles.footerCopyright}>
             CastMe © 2024 — The Future of Visual Fluidity
          </p>
        </footer>
      </main>
    </>
  );
}
