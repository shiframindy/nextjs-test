import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <h1 className={styles.title}> Education </h1>
     <h3 className={styles.topic}> Elementary </h3>
     <p className={styles.content}> Calinog Elementary School</p>
     <h3 className={styles.topic}>  Junior High School </h3>
     <p className={styles.content}> Central Philippine University </p>
     <h3 className={styles.topic}> Senior High School</h3>
     <p className={styles.content}> Central Philippine University</p>
     
    </main>
  );
}
