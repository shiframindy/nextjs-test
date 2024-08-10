import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <h1 className={styles.title}> This is my about page</h1>
     <h3 className={styles.topic}> Favorite Food</h3>
     <p className={styles.content}> Lazagna, Pizza, Carbonara</p>
     <h3 className={styles.topic}> Favorite Movies</h3>
     <p className={styles.content}> Damsel, Enola Holmes</p>
     
    </main>
  );
}
