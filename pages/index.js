import styles from '../styles/Home.module.css';

import Button from '../components/buttons/button';

import { useState } from 'react';

export default function Home() {
  const [color, setColor] = useState('COLOR');
  return (
    <div className={styles.main}>
      <h1>Select FavColor</h1>
      <div className={styles.card}>
        <h2 style={{ color: '#fff' }}>My favorite color is</h2>
        <div className={styles.colorBox}>{color}</div>
        <section className={styles.buttons}>
          <Button
            classname={styles.red}
            onClick={() => {
              setColor('RED');
            }}
          >
            RED
          </Button>
          <Button
            classname={styles.blue}
            onClick={() => {
              setColor('BLUE');
            }}
          >
            BLUE
          </Button>
          <Button
            classname={styles.green}
            onClick={() => {
              setColor('GREEN');
            }}
          >
            GREEN
          </Button>
          <Button
            classname={styles.gold}
            onClick={() => {
              setColor('GOLD');
            }}
          >
            GOLD
          </Button>
          <Button
            classname={styles.pink}
            onClick={() => {
              setColor('PINK ');
            }}
          >
            PINK
          </Button>
          <Button
            classname={styles.orange}
            onClick={() => {
              setColor('ORANGE');
            }}
          >
            ORANGE
          </Button>
          <Button
            classname={styles.black}
            onClick={() => {
              setColor('BLACK');
            }}
          >
            BLACK
          </Button>
          <Button
            classname={styles.white}
            onClick={() => {
              setColor('WHITE');
            }}
          >
            WHITE
          </Button>
        </section>
      </div>
    </div>
  );
}
