import Header from "./components/Header"
import Body from "./components/Body"

import "../src/styles/reset.sass"
import "../src/styles/app.sass"
import "../src/styles/variables.sass"

function App() {
  
  return (
    <div className="root">
      <Header />
      <Body />
    </div>
  )
}

export default App
