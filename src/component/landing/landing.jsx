import { useEffect, useRef } from "react";

import "./landing.scss";

function Landing () {
  const divEl = useRef(null);
  console.log( )

  useEffect(() => {
    const setLoading = () => {
      const element = divEl.current;
      element.className = element.className.split(' ').filter(el=>el!=='pre').join('').trim()
      console.log(element.className)
    }
    window.addEventListener('load', setLoading);
    return () => document.removeEventListener('load', setLoading);
  }, [])

  return (
    <div className="landing pre" ref={divEl} >
      hello landing
    </div>
  )
};
export {Landing};
