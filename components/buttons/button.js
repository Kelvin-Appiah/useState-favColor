import styles from './button.module.css';

export default function Button({ classname, children, onClick }) {
  return (
    <button className={`${styles.button} ${classname}`} onClick={onClick}>
      {children}
    </button>
  );
}
