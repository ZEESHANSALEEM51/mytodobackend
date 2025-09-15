import { useNavigate } from "react-router-dom";
import todoImage from "../assets/todo.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen text-center overflow-hidden">
      {/* Background image (full cover, no gap) */}
      <img
        src={todoImage}
        alt="Todo background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/60 to-indigo-900/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 sm:mb-6">
          Welcome to <span className="text-yellow-300">OurTodoApp</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-10 leading-relaxed">
          Organize your daily tasks easily with our simple Todo application.{" "}
          <br className="hidden sm:block" />
          <span className="text-yellow-300 font-semibold">Sign up</span> and start managing your tasks efficiently.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/signup")}
          className="px-5 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
        >
          Get Started 🚀
        </button>
      </div>
    </div>
  );
}

export default Home;
