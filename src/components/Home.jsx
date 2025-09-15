import { useNavigate } from "react-router-dom";
import todoImage from "../assets/todo.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(142, 158, 102, 0.11), rgba(94, 101, 174, 0.85)), url(${todoImage})`,
      }}
    >
      <div className="w-full px-6 md:px-10"> 
        {/* max-w hata diya taki side gap na aaye */}
        
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
          Welcome to <span className="text-yellow-300">MyTodoApp</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
          Organize your daily tasks easily with our simple Todo application. <br />
          <span className="text-yellow-300 font-semibold">Sign up</span> and start managing your tasks efficiently.
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="mt-10 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
        >
          Get Started 🚀
        </button>
      </div>
    </div>
  );
}

export default Home;
