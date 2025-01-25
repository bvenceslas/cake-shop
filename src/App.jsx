import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <>
      <div>
        <h1 className="text-red-700">Welcome to cake shop</h1>
        <p className="text-white mt-5 text-center">Hooks Above</p>
        <HooksCakeContainer />
        <p className="text-red-700 mt-10 text-center">Connect Below</p>
        <CakeContainer />
      </div>
    </>
  );
}

export default App;
