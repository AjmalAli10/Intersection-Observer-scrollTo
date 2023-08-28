import React, { useEffect, useState } from 'react';

const useTextInView = (ref) => {
  const [isIntersect, setIsIntersect] = useState(false);
  const callBackEntry = (entries) => {
    entries.forEach((entry) => {
      setIsIntersect(!entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackEntry);
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return [isIntersect];
};
export { useTextInView };
