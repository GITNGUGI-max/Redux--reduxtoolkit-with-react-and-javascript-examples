import store from './store'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HookContainer from './components/HookContainer'
import IcecreamContainer from './components/IcecreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import UserContainer from './components/UserContainer'

function App() {
  

  return (
    <Provider store={store}>
    <>
    <HookContainer/>
     {/* <CakeContainer/>
      <UserContainer/>
     <IcecreamContainer/>
     <UserContainer/> */}
      <NewCakeContainer/>
    </>
    </Provider>
  )
}

export default App
