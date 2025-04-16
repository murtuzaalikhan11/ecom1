import React from 'react' 
import Header from './components/headers/Header' 
import Page from './components/headers/mainpages/Page' 
import { BrowserRouter} from 'react-router-dom'
import { DataProvider } from './Globalstate' 

const App = () => {
  return (  
    <DataProvider>
    <BrowserRouter> 
    <div className='App'>  
      <Header/> 
      <Page/>
    </div>  
    </BrowserRouter> 
    </DataProvider>
    

  )
}

export default App