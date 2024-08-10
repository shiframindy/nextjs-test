import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <h1 className={styles.title}> Welcome to my page!</h1>
     <h3 className={styles.name}> Hello I am Mary Shifra Mindy C. Lopez</h3>

     <div className={styles.linkHolder}>
      <link href="./education">education
      </link>
      <link href="./about"> about
      </link>
     </div>

    </main>
  );
}
