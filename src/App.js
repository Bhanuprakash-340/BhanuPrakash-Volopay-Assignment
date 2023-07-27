import { useEffect } from 'react'
import Home from './components/Home'

const App = () =>{
  useEffect(() =>{
    document.title= "Volopay"
  },[])

  return(
    <div>
      <Home/>
    </div>
  )
}

export default App