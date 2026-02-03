import React, { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

const SectionReveal = ({ children, delay = 0 }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-50px");

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        onScreen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionReveal;