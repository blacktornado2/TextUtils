import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
    return (
        <div className="app">
            <Navbar title="Text - Utils"/>
            {/* <TextForm heading="Enter your text below"/> */}
            <About/>
        </div>
    );
}

export default App;
