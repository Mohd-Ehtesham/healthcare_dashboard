import styles from "./Card.module.css";
export default function Card({
  children,
  backgroundColor,
  style = {},
  textColor,
}) {
  return (
    <div
      className={styles.box}
      style={{
        position: "absolute",
        backgroundColor: backgroundColor,
        padding: "8px 6px 8px 12px",
        borderRadius: "12px",
        color: textColor,
        fontSize: "12px",
        fontWeight: "500",
        transform: "translate(-50%, -50%)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
