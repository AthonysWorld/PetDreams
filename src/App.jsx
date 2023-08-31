import Nav from './Components/Nav'
import Slide from './Components/Slide'
import About from './Components/About'
import Pets from './Components/Pets'
import Card from './Components/Card'
import Daily from './Components/Daily'
import Footer from './Components/Footer'
import Store from './Components/Store'

const App = () => {
  return (
    <div>
    <Nav/>
      <Slide/>
    <About/>
      <Pets/>
      <Store/>
      <Card/>
      <Daily/>
      <Footer/>
      
    </div>
  )
}

export default App
