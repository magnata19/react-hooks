import React, { useState } from "react";

const HookUseState = () => {
  //1 - Hook useState
  let userName = "Davidson";

  const [name, setName] = useState("Pacifico");

  const changeNames = () => {
    userName = "Davidson Pacifico";

    setName("Walter");
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    //envio do dado para api
    console.log(age)
  }

  return (
    <div>
      {/* 1 - useState */}
      <h2>use state</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      <hr />
      {/* useState e input */}
      <form onSubmit={handleSubmit}>
        <p>Digite sua idade: </p>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="enviar" />
        <p>Você tem {age} anos!</p>
      </form>
    </div>
  );
};

export default HookUseState;
