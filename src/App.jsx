import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <>
      <div>
        <h1 className="text-red-700">Welcome to cake shop</h1>
        <p className="text-white mt-5 text-center">Hooks Above</p>
        <HooksCakeContainer />
        <p className="text-red-700 mt-10 text-center">Connect Below</p>
        <CakeContainer />
        <hr className="w[500px] mt-12 mb-12" />
        <IceCreamContainer />
      </div>
    </>
  );
}

export default App;
