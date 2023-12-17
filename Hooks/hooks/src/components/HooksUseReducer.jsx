import { useReducer, useState } from "react";

const HooksUseReducer = () => {
  //1 - começando com useReducer

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - avançando no useReducer
  const initialTaks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  //funcao para add nova tarefa
  const taskReducer = (state, action) => {
    switch(action.type){
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText,
        }
        setTaskText("");
        return [...state, newTask]
      case 'DELETE':
        return state.filter((task) => task.id !== action.id)
        default:
          return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({type: 'ADD'});
  }

  const removeTask = (id) => {
    dispatchTasks({type: 'DELETE', id})
  }

  return (
    <div>
      <h2>HooksUseReducer</h2>
      <p>Número : {number}</p>
      <button onClick={dispatch}>Alterar Número!</button>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value='Enviar' />
      </form>
      {tasks.map((task) => (
        <div key={task.id}>
          <li>{task.text}</li>
          <button onClick={() => removeTask(task.id)}>Deletar</button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default HooksUseReducer;
