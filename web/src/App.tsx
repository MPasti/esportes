import "./styles/main.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-colorful-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="./assets/game-1.png" alt="" />
        </a>
        <a href="">
          <img src="./assets/game-2.png" alt="" />
        </a>
        <a href="">
          <img src="./assets/game-3.png" alt="" />
        </a>
        <a href="">
          <img src="./assets/game-4.png" alt="" />
        </a>
        <a href="">
          <img src="./assets/game-5.png" alt="" />
        </a>
        <a href="">
          <img src="./assets/game-6.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
