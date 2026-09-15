import React, { useState } from "react";

function AddTask({ onAddtaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-2 p-6 bg-slate-200 rounded-md shadow-xl flex flex-col">
      <input
        className="rounded-[3px] border-slate-500 outline-slate-500"
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="rounded-[3px] border-slate-500 outline-slate-500"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
            // Verificar se o titulo e descrição estão preenchidos
            if(!title.trim() || !description.trim()){
                alert('Titulo ou descrição não podem estar vazios')
            }
            else{
            onAddtaskSubmit(title, description);
            setTitle("");
            setDescription("");
            }
        }}
        className="bg-slate-600 text-white py-2 px-4 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
