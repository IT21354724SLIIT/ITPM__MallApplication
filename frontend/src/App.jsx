import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs'
import Advertisement from './pages/Advertisement/Advertisement'
import Feedbackreview from './pages/Feedback/Feedbackreview'
import Modal from './components/Modal/Modal'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import SlideBar from  './components/SlideBar/Sidebar'
import AdsTable from './pages/AdsCrud/AdsTable'
import CreateAds from './pages/AdsCrud/CreateAds'
import UpdateAds from './pages/AdsCrud/UpdateAds'
 
 
 const App = () => {
   return (
    <>
     <div className='app'>
      
    
    
      <Routes>
         
      <Route path='/' element={<Home/>}  />
        <Route path='/Home' element={<Home/>}  />
        <Route path='/AboutUs' element={<AboutUs/>}  />
        <Route path='/ContactUs' element={<ContactUs/>}  />
        <Route path='/Advertisements' element={<Advertisement/>}  />
        <Route path = '/Feedbackreview' element={<Feedbackreview/>} />
        <Route path = '/Modal' element={<Modal/>} />
        <Route path ='/Login' element={<Login />} />
        <Route path ='/Dashboard' element={<Dashboard />} />
        <Route path = '/SlideBar' element={<SlideBar/>} />
        <Route path = '/AdsTable' element={<AdsTable/>} />
        <Route path = '/CreateAds' element = {<CreateAds/>} />
        <Route path='/UpdateAds/:id' element={<UpdateAds/>} />
        <Route path="/update/:id" element={<UpdateAds />} />

 
      </Routes>
      
     </div>
  
     </>
   )
 }
 
 export default App