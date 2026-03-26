import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';
import styles from './Settings.module.css';

export function Settings() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'Auto' | 'Light' | 'Dark'>('Dark');
  const [sound, setSound] = useState<string>('Stellar');
  
  const soundOptions = ['Stellar', 'Pulse', 'Chime', 'Echo', 'Orbit', 'Nova'];

  // Apply actual theme class to HTML element for 'Light' mode handling
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'Light') {
       root.classList.add('light-mode');
       root.classList.remove('dark-mode');
    } else if (theme === 'Dark') {
       root.classList.add('dark-mode');
       root.classList.remove('light-mode');
    } else {
       // For Auto, rely on media query or default
       root.classList.remove('light-mode', 'dark-mode');
    }
  }, [theme]);

  return (
    <>
      <TopAppBar title="Lumina Cast" />
      <main className={styles.mainContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <span className={styles.heroLabel}>Configuration</span>
          <h1 className={styles.heroTitle}>Settings</h1>
        </section>

        <div className={styles.settingsGroups}>
          {/* Appearance Section */}
          <section className={styles.groupSection}>
            <div className={styles.groupHeader}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-primary-fixed)' }}>palette</span>
              <h2 className={styles.groupTitle}>Appearance</h2>
            </div>
            
            <div className={styles.groupCard}>
              <div className={styles.settingRow}>
                <div>
                  <p className={styles.settingTitle}>Theme Mode</p>
                  <p className={styles.settingDesc}>Customize your visual interface</p>
                </div>
                
                {/* Segmented Control */}
                <div className={styles.segmentedControl}>
                  <button 
                    onClick={() => setTheme('Auto')} 
                    className={theme === 'Auto' ? styles.segmentBtnActive : styles.segmentBtn}
                  >
                    Auto
                  </button>
                  <button 
                    onClick={() => setTheme('Light')} 
                    className={theme === 'Light' ? styles.segmentBtnActive : styles.segmentBtn}
                  >
                    Light
                  </button>
                  <button 
                    onClick={() => setTheme('Dark')} 
                    className={theme === 'Dark' ? styles.segmentBtnActive : styles.segmentBtn}
                  >
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className={styles.groupSection}>
            <div className={styles.groupHeader}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-primary-fixed)' }}>tune</span>
              <h2 className={styles.groupTitle}>Preferences</h2>
            </div>
            
            <div className={styles.prefsCard}>
              {/* Auto-connect */}
              <div className={styles.prefRow}>
                <div className={styles.prefLeft}>
                  <div className={styles.prefIcon}>
                    <span className="material-symbols-outlined">sync</span>
                  </div>
                  <div>
                    <p className={styles.settingTitle}>Auto-connect</p>
                    <p className={styles.settingDesc}>Instantly pair with last device</p>
                  </div>
                </div>
                
                {/* Toggle */}
                <label className={styles.toggleWrapper}>
                  <input type="checkbox" className={styles.toggleInput} defaultChecked />
                  <div className={styles.toggleTrack}></div>
                </label>
              </div>

              {/* Notification Sound */}
              <div className={styles.prefRow}>
                <div className={styles.prefLeft}>
                  <div className={styles.prefIcon}>
                    <span className="material-symbols-outlined">notifications</span>
                  </div>
                  <div>
                    <p className={styles.settingTitle}>Notification sound</p>
                    <p className={styles.settingDesc}>Alert tones for application states</p>
                  </div>
                </div>
                
                <div className={styles.prefRight}>
                  <select 
                    value={sound} 
                    onChange={(e) => setSound(e.target.value)}
                    className={styles.soundSelect}
                  >
                    {soundOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Help & Support */}
              <div 
                className={styles.prefRow} 
                style={{ cursor: 'pointer' }} 
                onClick={() => navigate('/manual')}
              >
                <div className={styles.prefLeft}>
                  <div className={styles.prefIcon}>
                    <span className="material-symbols-outlined">help_outline</span>
                  </div>
                  <div>
                    <p className={styles.settingTitle}>Help & Support</p>
                    <p className={styles.settingDesc}>Guides and User Manual</p>
                  </div>
                </div>
                
                <span className="material-symbols-outlined" style={{ color: 'var(--color-on-surface-variant)' }}>chevron_right</span>
              </div>
            </div>
          </section>

          {/* Account Section */}
          <section className={styles.accountGrid}>
            <div className={styles.accountCard}>
               <span className="material-symbols-outlined" style={{ color: 'var(--color-primary-fixed)', fontSize: '2.25rem' }}>security</span>
               <div>
                  <h3 className={styles.accountTitle}>Privacy & Security</h3>
                  <p className={styles.accountDesc}>Manage your data and keys</p>
               </div>
            </div>
            
            <div className={styles.signOutCard}>
               <span className="material-symbols-outlined" style={{ color: 'var(--color-error)', fontSize: '2.25rem' }}>logout</span>
               <div>
                  <h3 className={styles.accountTitle}>Sign Out</h3>
                  <p className={styles.accountDesc}>Logged in as @alex_lumina</p>
               </div>
            </div>
          </section>
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}
