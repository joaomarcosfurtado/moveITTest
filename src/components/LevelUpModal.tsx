import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/componets/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  
  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        
        <strong>Parabéns</strong>
        <p>Vocẽ alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close Modal"/>
        </button>
      </div>
    </div>
  );
}