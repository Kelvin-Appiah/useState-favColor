import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Button from '../components/buttons/button';

export default function Home() {
  const [color, setColor] = useState('choose a color from below:');

  const RedButtonHandler = () => {
    setColor('RED');
  };

  const BlueButtonHandler = () => {
    setColor('BLUE');
  };

  const GreenButtonHandler = () => {
    setColor('GREEN');
  };

  const GoldButtonHandler = () => {
    setColor('GOLD');
  };

  const PinkButtonHandler = () => {
    setColor('PINK');
  };

  const OrangeButtonHandler = () => {
    setColor('ORANGE');
  };

  const BlackButtonHandler = () => {
    setColor('BLACK');
  };

  const WhiteButtonHandler = () => {
    setColor('WHITE');
  };
  return (
    <div className={styles.main}>
      <h1>Select FavColor</h1>
      <div className={styles.card}>
        <h3 className={styles.title}>My favorite color is</h3>
        <div className={styles.colorBox}>
          <h4>{color}</h4>
        </div>
        <section className={styles.buttons}>
          <Button onClick={RedButtonHandler} classname={styles.red}>
            RED
          </Button>
          <Button onClick={BlueButtonHandler} classname={styles.blue}>
            BLUE
          </Button>
          <Button onClick={GreenButtonHandler} classname={styles.green}>
            GREEN
          </Button>
          <Button onClick={GoldButtonHandler} classname={styles.gold}>
            GOLD
          </Button>
          <Button onClick={PinkButtonHandler} classname={styles.pink}>
            PINK
          </Button>
          <Button onClick={OrangeButtonHandler} classname={styles.orange}>
            ORANGE
          </Button>
          <Button onClick={BlackButtonHandler} classname={styles.black}>
            BLACK
          </Button>
          <Button onClick={WhiteButtonHandler} classname={styles.white}>
            WHITE
          </Button>
        </section>
      </div>
    </div>
  );
}
