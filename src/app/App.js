import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import { Cart } from '../features/cart/Cart';
import { Total } from '../total/Total';
import { Voucher } from '../features/voucher/Voucher';
import Owner from '../features/owner/Owner';
import { ProductCard } from '../components/ProductCard';
import Menu from '../features/menu/Menu';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Cart/>
          <Menu/>
          <Total/>
          <Voucher/>
          <Owner/>
        </div>
    </Provider>
  );
}
  
export default App;
