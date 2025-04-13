import './App.css'
import TranslateComponent from './components/TranslateComponent'

function App() {
    return (
        <div>
            <h1>Mon Traducteur perso !</h1>
            <TranslateComponent />
            <button id="backToTop" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                🔝 Up ! Up ! Up !
            </button>

        </div>
    )
}

export default App
