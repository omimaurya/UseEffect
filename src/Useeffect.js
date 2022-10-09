import { useEffect, useState } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  });
  return <>My effect is render {count}</>;
};
export default Useeffect;
