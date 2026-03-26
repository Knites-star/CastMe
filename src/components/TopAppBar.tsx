import styles from './TopAppBar.module.css';
import { useNavigate } from 'react-router-dom';

interface TopAppBarProps {
  title?: string;
  showBack?: boolean;
}

export function TopAppBar({ title = 'CastMe', showBack = false }: TopAppBarProps) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        {showBack ? (
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back</span>
            <span className={styles.backText}>Back</span>
          </button>
        ) : (
          <div className={styles.avatarContainer}>
            <span className="material-symbols-outlined" style={{ color: '#FACC15', fontSize: '1.25rem' }}>cast</span>
          </div>
        )}
        <h1 className={styles.title}>{title}</h1>
      </div>
      
      {!showBack && (
        <div className={styles.rightSection}>
          <button className={styles.iconButton} onClick={() => navigate('/settings')}>
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      )}
    </header>
  );
}
