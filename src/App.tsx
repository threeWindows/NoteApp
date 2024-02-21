import { ChangeEvent, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [name, setName] = useState("");
  const [containerVisible, setContainerVisibility] = useState(true);

  const fetchName = (event: ChangeEvent) => {
    setName(event.target.value);
  };

  return (
    <>
      <div>
        <Header name={name} onOpen={() => setContainerVisibility(true)} />
        <Menu
          onClose={() => setContainerVisibility(false)}
          isMenuOpen={containerVisible}
          fetchName={fetchName}
        />
      </div>
    </>
  );
}

export default App;
