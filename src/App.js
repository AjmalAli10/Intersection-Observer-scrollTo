import React, { useRef } from 'react';
import './style.css';
import { useTextInView } from './customHook.js';
import { data } from './data.js';
export default function App() {
  const targetRef = useRef(null);
  const [isIntersecting] = useTextInView(targetRef);
  return (
    <div className="app">
      <h1 ref={targetRef}>Hello LinkedIn!</h1>
      <p>
        How we can create a seamless ascent from the bottom to the top smoothly?
      </p>
      <p className='ipsum-text'>{data.ipsumText}</p>
      {isIntersecting && (
        <div
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: 'smooth',
            });
          }}
          className="scroll-top-btn"
        >
          <button>Scroll Me Top</button>
        </div>
      )}
    </div>
  );
}
