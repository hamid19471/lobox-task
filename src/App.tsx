import MultiSelect from "./components/multi-select";
import { OPTIONS_DUMMY } from "./constants/options-dummy";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MultiSelect options={OPTIONS_DUMMY} />
    </div>
  );
}

export default App;
