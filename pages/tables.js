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
              <td>Company Name</td>
              <td className={styles.pcs}>457</td>
              <td className={styles.cur}>6535178</td>
              <td>-</td>
              <td className={styles.per}>50,71</td>
              <td className={styles.per}>49,21</td>
              <td className={styles.per}>0</td>
            </tr>
            <tr className={`${styles.fold} ${isOpen[index] ? styles.open : ''}`}>
              <td colSpan="7">
                <div className={styles.foldContent}>
                  <h3>Company Name</h3>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                  </p>
                  <table className={styles.innerTable}>
                    <thead>
                      <tr>
                        <th>Company name</th>
                        <th>Customer no</th>
                        <th>Customer name</th>
                        <th>Insurance no</th>
                        <th>Strategy</th>
                        <th>Start</th>
                        <th>Current</th>
                        <th>Diff</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* ... (same structure as before) */}
                      </tr>
                    </tbody>
                  </table>
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
