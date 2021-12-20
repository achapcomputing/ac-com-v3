import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import headerStyles from '../styles/Header.module.scss';

const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      cursorChar: '_', // "\u2588" for block cursor
      backDelay: 1250,
      strings: ['Cloud', 'Containers', 'Infrastructure Automation'],
    });
  }, []);

  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        ASHLYN <span>CHAPMAN</span>
      </h1>
      <h4 className={headerStyles.subtitle}>
        Computer Science Undergraduate at North Carolina State University
      </h4>
      <code className={headerStyles.code}>
        $ <span ref={textRef}></span>
      </code>
    </div>
  );
};

export default Header;
