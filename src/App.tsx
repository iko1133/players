import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import store from "./store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <HomePage />
        </Provider>
      </header>
    </div>
  );
}

export default App;
