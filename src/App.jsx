import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/content/body'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import CVPage from './pages/CV'

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen w-full bg-radial-[at_25%_10%] from-portfolio-primary-dark-gradient from-0% to-15% to-portfolio-primary-dark">
            <Header />
            <Body />
            <Footer />
          </div>
        } />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
