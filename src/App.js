import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movies from './components/Movies/Movies'
function App() {
  return (
    <Router>
      <Header />
      <Movies />
    </Router>
  )
}

export default App
