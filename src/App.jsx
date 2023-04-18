import Header from "./components/Header"
import Body from "./components/Body"

import "../src/styles/reset.sass"
import "../src/styles/app.sass"
import "../src/styles/variables.sass"
import Footer from "./components/Footer"

function App() {
  
  return (
    <div className="root">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
