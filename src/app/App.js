import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import { Cart } from '../features/cart/Cart';
import { Total } from '../total/Total';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Cart/>
          <Total/>
        </div>
    </Provider>
  );
}
  
export default App;
