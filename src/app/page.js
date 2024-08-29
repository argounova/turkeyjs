import Image from "next/image";
import styles from "./page.module.css";
import Countdown from "../../components/Countdown";

export default function Home() {
  const targetDate = '2024-11-28T20:00:00';
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        <Countdown targetDate={targetDate} />
        'til Thanksgiving!
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/argounova-logo.png"
              alt="Argounova Logo"
              className={styles.vercelLogo}
              width={200}
              height={40}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/turkeyjs-logo-black.png"
          alt="Turkey.js Logo"
          width={360}
          height={74}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Apps <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about finger foods and li'l smokies.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sides <span>-&gt;</span>
          </h2>
          <p>Learn about Turkey.js and its interactive side dishes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Desserts <span>-&gt;</span>
          </h2>
          <p>Explore the sweet side of Turkey.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Drinks <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Turkey.js attitude with a liquid refresher.
          </p>
        </a>
      </div>
    </main>
  );
}
