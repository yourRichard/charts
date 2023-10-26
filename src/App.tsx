import "../app/globals.css";
import Header from "./components/global/header/Header";
import Charts from "./components/global/main-charts/Charts";
import { useTheme } from "./themeContext";
function App() {
  return (
    <div className=" h-screen bg-slate-900">
          <div className="bg-zinc-700 w-[80%] border-l border-ring border-r border-r-ring mx-auto h-full " >

            <Header/>
            <Charts/>
    </div>
    </div>

  )
}

export default App
