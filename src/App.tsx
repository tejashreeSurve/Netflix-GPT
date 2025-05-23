import Body from "./components/body";
import { Provider } from "react-redux";
import appStore from "./slices/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
