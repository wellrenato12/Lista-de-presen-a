import styles from './Card.module.css';

export function Card({ name, time }) {
    return (
        <div className={styles.card}>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}