import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>APCHAP</title>
        <meta
          name='description'
          content="Ashlyn Chapman's Technical Portfolio"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />

        <p className={styles.description}> </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://twitter.com/apchapcomputing'
          target='_blank'
          rel='noopener noreferrer'>
          Built by Ashlyn Chapman
        </a>
      </footer>
    </div>
  );
}
