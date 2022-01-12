import './App.css';
import './neoStyle.css';
import CryptoSelect from './components/cryptoSelect/cryptoSelect';
import MarketCap from './components/marketCap/marketCap';
import Price from './components/Price/price';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <div class={'neo_glass2'}>
	  <CryptoSelect></CryptoSelect>
		<MarketCap></MarketCap>
		<Price></Price>
		</div>
      </header>
    </div>
  );
}

export default App;
