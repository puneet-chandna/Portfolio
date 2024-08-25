import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
