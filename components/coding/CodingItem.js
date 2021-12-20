import Link from 'next/link';
import codingStyles from '../../styles/Coding.module.scss';

function CodingItem({ project }) {
  return (
    <div className={codingStyles.item}>
      <h3>{project.title}</h3>
      <p>{project.custom_excerpt}</p>
      {/* <p>{project.html}</p> */}
      <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
      {/* <img className={portfolioStyles.logo} src={project.feature_image} /> */}
    </div>
    // <>
    //   <Link href={`/portfolio/${project.slug}`}>
    //     <a className={codingStyles.item}>
    //       <h3>{project.title}</h3>
    //       <p>{project.custom_excerpt}</p>
    //       {/* <img className={portfolioStyles.logo} src={project.feature_image} /> */}
    //     </a>
    //   </Link>
    // </>
  );
}

export default CodingItem;
