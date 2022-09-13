import Button from './button';
import styles from './buttonList.module.css';

export default function ButtonList(props) {
  const { buttons } = props;

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button) => (
        <Button key={children} classname={classname} onClick={onClick} />
      ))}
    </div>
  );
}
