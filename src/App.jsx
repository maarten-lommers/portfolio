import Body from './components/content/body'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-radial-[at_25%_10%] from-portfolio-primary-dark-gradient from-0% to-15% to-portfolio-primary-dark">
          <Header />
          <Body />
          <Footer />
    </div>
  )
}

export default App
