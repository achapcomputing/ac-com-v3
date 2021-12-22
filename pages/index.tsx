import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from '../styles/Home.module.scss';
import codingStyles from '../styles/Coding.module.scss';
import Filters from '../components/Filters';
import Header from '../components/Header';
import Project from '../components/Project';

const allFilters = ['frontend', 'backend', 'devops', 'databases'];

export default function Home({ projects }) {
  const [selectedFilters, setSelectedFilters] = useState(allFilters);
  const [selectedProjects, setSelectedProjects] = useState(projects);

  const filterProjects = async (button) => {
    console.log(button);
    // setSelectedFilters([button.value]);
    console.log(selectedFilters);
    console.log(selectedProjects);
    // if (button.value === 'all') {
    //   setFilteredProjects(projects);
    //   return;
    // }
    const filt = allFilters.filter((f) => f !== button.value);
    setSelectedFilters(filt);
    const filteredData = projects.filter((p) => {
      // console.log(p.frontmatter.experience_skills);
      selectedFilters.includes(p.frontmatter.experience_skills);
      // p.frontmatter.experience_skills === button.value;
    });
    setSelectedProjects(filteredData);
  };

  useEffect(() => {
    console.log('use effect');
    const filteredData = projects.filter((p) => {
      // console.log(p.frontmatter.experience_skills);
      selectedFilters.includes(p.frontmatter.experience_skills);
      // p.frontmatter.experience_skills === button.value;
    });
    setSelectedProjects(filteredData);
  }, [selectedFilters]);

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

        <Filters filters={selectedFilters} filterProjects={filterProjects} />

        <div className={codingStyles.container}>
          {selectedProjects.map((project) => (
            <Project key={project.slug} project={project} />
          ))}
          {/* {selectedFilters.length == 0
            ? projects.map((project) => (
                <Project key={project.slug} project={project} />
              ))
            : projects
                .filter((p) =>
                  selectedFilters.includes(p.frontmatter.experience_skills)
                )
                .map((project) => (
                  <Project key={project.slug} project={project} />
                ))} */}
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
