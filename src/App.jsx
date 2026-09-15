import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from 'uuid';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description:
        "Estudar programação para me tornar um desenvolvedor FullStack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Assistir o filme",
      description:
        "Assitir filme para me tornar um grande especialista no assunto",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Limpar a casa",
      description: "Limpar toda a casa porque hoje tem visita",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddtaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }
  return (
    <div className="w-screen h-screen bg-gray-700 flex justify-center p-6 ">
      <div className="w[500px] space-y-2">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddtaskSubmit={onAddtaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
