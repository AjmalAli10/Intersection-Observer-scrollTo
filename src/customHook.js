import React, { useEffect, useState } from 'react';

const useTextInView = (ref) => {
  const [isIntersect, setIsIntersect] = useState(false);
  const callBackEntry = (entries) => {
    entries.forEach((entry) => {
      setIsIntersect(!entry.isIntersecting);
    });
  };
  const observer = new IntersectionObserver(callBackEntry);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [isIntersect];
};
export { useTextInView };
