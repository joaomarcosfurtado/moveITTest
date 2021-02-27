import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/componets/Profile.module.css'

export function Profile () {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/joaomarcosfurtado.png" alt="João Marcos"/>
      <div>
        <strong>João Marcos Furtado</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}</p
        >
      </div>
    </div>
  );
}