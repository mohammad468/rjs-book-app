import styles from "./Side.module.css";

function Side({data: {image, title}}) {
  return (
    <div className={styles.card}>
        <img src={`/assets/${image}`} alt={title} />
        <h3>{title}</h3>
    </div>
  )
}

export default Side