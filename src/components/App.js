import React from 'react'

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}


let dataArray = Object.entries(data)
let yearsArray = dataArray.map((i)=>{
    return(i[0])
})
function options(){
 let optionsArray= yearsArray.map((i)=>{
    return <option value={null}>{i}</option>
})
    
  }
}



const App = () => {

  return (
    <div id="main">
      <select>
    {options()}
          
  
      </select>

<div  id="selected-year"></div>
    </div>
  )
}


export default App;
