import { useState } from 'react'; 

import './style/_main.scss';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className= {theme}>
      <div className='background flex'>

      <h1 className='text'>Hello world</h1>
      <button onClick={()=> setTheme(theme=='light' ? 'dark' : 'light')}>
        Switch theme
      </button>

      </div>
    </div>
  )
}

export default App
