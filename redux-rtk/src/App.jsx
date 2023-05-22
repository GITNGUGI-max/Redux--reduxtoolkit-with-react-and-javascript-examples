
import CakeView from '../features/cake/CakeView'
import IcecreamView from '../features/icecream/IcecreamView'
import UserView from '../features/users/UserView'
import './App.css'
import { Provider } from 'react-redux'
import store from '../app/store'

function App() {


  return (
    <Provider store={store}>
    <>
    <CakeView/>
     <IcecreamView/>
     <UserView/>
    </>
    </Provider>
  )
}

export default App
