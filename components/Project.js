import { marked } from 'marked';
import Link from 'next/link';

const Project = ({ project }) => {
  console.log(project.frontmatter.order);
  return (
    <div class='card'>
      <h3>{project.frontmatter.title}</h3>
      <p>{project.frontmatter.period}</p>
      <div className='post-body'>
        <div
          dangerouslySetInnerHTML={{ __html: marked(project.content) }}></div>
      </div>

      {/* <Link href={`/coding/${project.slug}`}>
        <a className='btn'>See More</a>
      </Link> */}
    </div>
    // Make entire card a link
    // <>
    //   <Link href={`/coding/${project.slug}`}>
    //     <a className={codingStyles.item}>
    //       <h3>{project.title}</h3>
    //       <p>{project.period}</p>
    //     </a>
    //   </Link>
    // </>
  );
};

export default Project;
