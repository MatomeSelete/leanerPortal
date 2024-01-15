// MyTable.js
import React, { useState } from 'react';
import styles from '../styles/MyTable.module.css';

const MyTable = () => {
  const [isOpen, setIsOpen] = useState(Array(10).fill(false));

  const toggleRow = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  return (
    <table className={styles.foldTable}>
        
      <tbody>
        {Array.from({ length: 10 }, (_, index) => (
          <React.Fragment key={index}>
            <tr
              className={`${styles.view} ${isOpen[index] ? styles.open : ''}`}
              onClick={() => toggleRow(index)}
            >
              <td>TEC SKILLS</td>
              <td className={styles.pcs}>SCORE</td>
              <td className={styles.cur}>DETAILS</td>
              <td className={styles.per}></td>
            </tr>
            <tr className={`${styles.fold} ${isOpen[index] ? styles.open : ''}`}>
              <td colSpan="7">
                <div className={styles.foldContent}>
                  
                  <p className={` ${styles.fristp }`}>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                  </p>

                  <p className={` ${styles.lastp }`} >fames ac turpis egestas</p>
                </div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
