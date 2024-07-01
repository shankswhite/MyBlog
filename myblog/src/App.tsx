import './App.css'
import HeaderComponent from './components/Header/HeaderComponent';
import HeroComponent from './components/Hero/HeroComponent';
import WIPComponent from './components/WIP/WIPComponent';
import css from './styles/app.module.scss'
import './styles/global.scss'
import './styles/index.css'

function App() {

  return <div className={`bg-primary ${css.container}`}>
    <HeaderComponent />
    <HeroComponent />
    <WIPComponent />
  </div>
}

export default App;
