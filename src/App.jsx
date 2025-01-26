import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CakeQtyContainer from "./components/CakeQtyContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import Separator from "./components/Separator";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <>
      <div>
        <h1 className="text-red-700">Welcome to cake shop</h1>
        <Separator />
        <UserContainer />
        <Separator />
        <p className="text-white mt-5 text-center">USING HOOKS</p>
        <ItemContainer cake />
        <HooksCakeContainer />
        <p className="text-red-700 mt-10 text-center">Specifying Quantity</p>
        <CakeQtyContainer />
        <Separator />
        <p className="text-red-700 mt-10 text-center">USING CONNECT</p>
        <CakeContainer />
        <Separator />
        <p className="text-red-700 mt-10 text-center">Buy Icecream</p>
        <IceCreamContainer />
        <Separator />
        <ItemContainer />
      </div>
    </>
  );
}

export default App;
