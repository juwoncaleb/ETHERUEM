import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transaction,
} from "./components";
import '../src/index.css'
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
     
    </div>
  );
}

export default App;
