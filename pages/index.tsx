import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from '../styles/Home.module.scss';
import codingStyles from '../styles/Coding.module.scss';
import Header from '../components/Header';
import Project from '../components/Project';

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

        <div className={codingStyles.container}>
          {projects.map((project) => (
            <div key={project.slug} className={codingStyles.item}>
              <Project project={project} />
            </div>
          ))}
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

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('projects')); // get files from projects folder

  const projects = files.map((filename) => {
    // create slug from filename
    const slug = filename.replace('.md', '');
    // get frontmatter
    const meta = fs.readFileSync(path.join('projects', filename), 'utf-8');
    const { data: frontmatter, content } = matter(meta);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      projects: projects.sort((a, b) => {
        return a.frontmatter.order - b.frontmatter.order; // sort by lowest rank shows up first
      }),
    },
  };
}
