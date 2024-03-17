'use client'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'//this makes the bootstrap apply everywhere
import CommentsSection from '../components/CommentsSection'

const Template = ({children}) => {

  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.min.js')
  },[])
  return (
    <div >
        

    {children}
    </div>
  )
}

export default Template