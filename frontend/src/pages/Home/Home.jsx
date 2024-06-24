import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import { Routes ,Route } from 'react-router-dom'
import NewsletterSignup from '../NewsLetter/NewsletterSignup'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

 

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
     <Categories />
      
      <Footer />
    </div>
   
  )
}

export default Home
