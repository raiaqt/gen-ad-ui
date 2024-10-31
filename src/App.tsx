import Table from "./components/Table/Table";
import "./App.css";
import { patientDefinition, patients } from "./components/Table/sample";

function App() {
  // const [count, setCount] = useState(0);

  return <Table data={patients} properties={patientDefinition.properties} />;
}

export default App;
