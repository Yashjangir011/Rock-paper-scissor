import Header from "./components/header"
import paper2 from "./assets/paper-texture.jpg"
import GameBoard from "./components/GameBoard"
     
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10">
        <img src={paper2} alt="" className="w-full h-full object-cover" />
      </div>
      <Header />
      <GameBoard />
    </div>
  )
}

export default App

