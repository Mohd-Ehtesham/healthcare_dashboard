import { ZoomIn } from "lucide-react";

import Card from "../ui/Card";

import humanImage from "../../assets/humanImage.png";
import { healthAppointments } from "../../data/healthAppointments";

import styles from "./HumanCard.module.css";

export default function HumanCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <ZoomIn className={styles.iconTopRight} />
        <img src={humanImage} alt="Human Body..." className={styles.image} />
        <div className={styles.iconBottom}></div>
      </div>
      {healthAppointments.map((item) => (
        <Card
          key={item.title}
          backgroundColor={item.backgroundColor}
          textColor={item.textColor}
          style={item.position}
        >
          <span className={styles.emoji}>{item.emoji}</span>
          Healthy {item.title}
        </Card>
      ))}
    </div>
  );
}
