import CodingItem from './CodingItem';
// import TypeBar from './TypeBar'
import { useState } from 'react';
import codingStyles from '../../styles/Coding.module.scss';

const CodingList = ({ projects }) => {
  // const [selectedType, setSelectedType] = useState("featured");

  // const projectTypes = [
  //     {
  //       id: "featured",
  //       title: "Featured",
  //     },
  //     {
  //       id: "web",
  //       title: "Web App",
  //     },
  //     {
  //       id: "mobile",
  //       title: "Mobile App",
  //     },
  //     {
  //       id: "design",
  //       title: "Design",
  //     },
  //     {
  //       id: "content",
  //       title: "Content",
  //     },
  //   ];

  return (
    // <div className={portfolioStyles.portfolio}>
    //     <p>What I am building</p>
    //     <ul>
    //         {projectTypes.map(item => (
    //             <TypeBar
    //                 title={item.title}
    //                 active={selectedType === item.id}
    //                 setSelectedType={setSelectedType}
    //                 id={item.id}
    //             />
    //         ))}
    //     </ul>

    <div className={codingStyles.container}>
      {projects.map((project) => (
        <CodingItem project={project} />
      ))}
    </div>
  );
};

export default CodingList;
