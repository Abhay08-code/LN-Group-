import { useState } from 'react'
import InstitutionCards from './InstitutionCards'
import NavBar from './NavBar'
import BusinessCards from './BusinessCards'

function App() {
  

  return (
    <div>
     
      <NavBar/>
      <div className="pt-24 bg-gray-100 min-h-screen"> 
      <InstitutionCards/>
      </div>
            <div className="pt-24 bg-gray-100 min-h-screen"> 
      <BusinessCards/>
      </div>
    </div>
  )
}

export default App
