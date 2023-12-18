import { useEffect, useState } from "react";

const HookUseEffect = () => {
  //1 - useEffect sem dependências
  useEffect(() => {
    console.log("estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  //2 - useEffect com dependencia
  useEffect(() => {
    console.log("Serei executado apenas uma vez.");
  }, []);

  //3 - useEffect com dependencia no array
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda!");
    }
  }, [anotherNumber]);

  //4 - cleanup useeffect
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('Hello World')
  //     setAnotherNumber(anotherNumber + 1)
  //   },2000)
  //   return () => clearTimeout(timer);
  // },[anotherNumber])
  return (
    <div>
      <h2>UseEffect</h2>
      <p>{number}</p>
      <button onClick={changeSomething}>Alterar numero</button>
      <p>AnotherNumber: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Alterar
      </button>
    </div>
  );
};

export default HookUseEffect;
