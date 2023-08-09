import Header from './Header'
import Home from './Home'
import CountryInfo from './CountryInfo'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/:countryName" element={<CountryInfo />} />
    </Routes>
    </>
  )
}
