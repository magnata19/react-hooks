import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [numbers, setNumbers] = useState(0);

  //retorna erro de memory leak, pois com milhares de nmrs no array, ficaria ruim para renderizar a cada alteração no componente
  // const premiumNumbers = ["0", "100", "200"];

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  },[])

  useEffect(() => {
    console.log("Premium foi alterado.");
  }, [premiumNumbers]);
  return (
    <div>
      <hr />
      <h2>HookUseMemo</h2>
      <input type="text" onChange={(e) => setNumbers(e.target.value)} />
      {premiumNumbers.includes(numbers) ? <p>Acertou o número</p> : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;
