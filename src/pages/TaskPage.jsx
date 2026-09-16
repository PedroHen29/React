import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className=" space-y-2 h-screen w-screen bg-gray-700 p-6">
      <div className="w[500px] space-y-2 shadow-xl">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-white "
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md space-y-2">
          <h2 className="text-xl  font-bold text-slate-600 rounded-md">
            {title}
          </h2>
          <p className="text-xl text-slate-600 rounded-md">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
