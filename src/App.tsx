import "../app/globals.css";
import Header from "./components/global/header/Header";
import Charts from "./components/global/main-charts/Charts";

function App() {

  return (
    <div className="bg-slate-900 h-screen">
          <div className="bg-background dark:bg-background w-[80%] border-l border-ring border-r border-r-ring mx-auto h-full">

            <Header/>
            <Charts/>
    </div>
    </div>

  )
}

export default App
