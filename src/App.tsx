import "../app/globals.css";
import Header from "./components/global/header/Header";
import Charts from "./components/global/main-charts/Charts";
import { useTheme } from "./themeContext";
function App() {
  const {theme} = useTheme()
  return (
    <div className=" h-screen"style={{background:theme.primaryColor}}>
          <div className="bg-zinc-400 w-[80%] border-l border-ring border-r border-r-ring mx-auto h-full " >

            <Header/>
            <Charts/>
    </div>
    </div>

  )
}

export default App
