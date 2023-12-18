import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  //1 - useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
    console.log("renderizou");
  });

  //2 useRef e dom
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("")
    inputRef.current.focus();
  }

  return (
    <div>
      {/*1  useRef */}
      <h2>useRef</h2>
      <p>O componente renderizou: {numberRef.current}</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      <br />
      {/* 2 - useRef e dom */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default HookUseRef;
