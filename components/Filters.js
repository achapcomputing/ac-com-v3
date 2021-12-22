import { useState } from 'react';
import filtersStyles from '../styles/Filters.module.scss';

const filter = ['backend', 'devops'];

const skills = [
  { value: 'backend', label: 'Backend' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'databases', label: 'Databases' },
  { value: 'devops', label: 'DevOps' },
];

const types = [
  { value: 'academic', label: 'Academic' },
  //   { value: 'personal', label: 'Personal' },
  { value: 'professional', label: 'Professional' },
];

const Filters = ({ filters, filterProjects }) => {
  console.log('filters ' + filters);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleSkillChange = (skill) => {
    console.log(selectedSkills);
    const selected = skill;
    const isSelected = selectedSkills.includes(selected);
    if (isSelected) {
      // filter is already select, unselect it
      setSelectedSkills(selectedSkills.filter((skill) => skill !== selected));
    } else {
      // select filter
      setSelectedSkills([...selectedSkills, selected]);
    }
  };

  return (
    <div className={filtersStyles.container}>
      <div className={filtersStyles.section}>
        <h4 className={filtersStyles.title}>Skill</h4>

        <div className={filtersStyles.contents}>
          {skills.map((s) => (
            <button onClick={() => filterProjects(s)} key={s.key}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className={filtersStyles.section}>
        <h4 className={filtersStyles.title}>Type</h4>
        <div className={filtersStyles.contents}>
          {types.map((t) => (
            <button onClick={() => console.log(t.value)} key={t.value}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
