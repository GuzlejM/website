import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default ServiceCard;