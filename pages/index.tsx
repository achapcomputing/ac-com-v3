import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import Coding from '../components/coding/CodingList';

type CodingProject = {
  title: string;
  slug: string;
  custom_excerpt: string;
  html: string;
};

export default function Home({ projects }: { projects: CodingProject[] }) {
  return (
    <div>
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

        <Coding projects={projects} />
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

async function getPortfolio() {
  const { BLOG_URL, CONTENT_API_KEY } = process.env;
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/pages?key=${CONTENT_API_KEY}&filter=tags:coding-portfolio&fields=title,slug,custom_excerpt,html`
  ).then((res) => res.json());
  const pages = res.pages;
  return pages;
}

Home.getInitialProps = async function () {
  const projects: CodingProject[] = await getPortfolio();
  return {
    projects: projects,
  };
};
