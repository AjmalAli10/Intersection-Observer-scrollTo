import React, { useEffect, useState, useMemo } from 'react';

const useTextInView = (ref) => {
  const [isIntersect, setIsIntersect] = useState(false);
  const callBackFun = useMemo(
    () => (entries) => {
      entries.forEach((entry) => {
        setIsIntersect(!entry.isIntersecting);
      });
    },
    []
  );
  const observer = new IntersectionObserver(callBackFun);
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