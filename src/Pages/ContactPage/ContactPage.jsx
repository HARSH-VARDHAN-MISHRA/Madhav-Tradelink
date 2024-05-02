import React, { useEffect } from 'react'
import Contact from '../../components/Contact/Contact'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const ContactPage = () => {
    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
    }, [])
  return (
    <>
      <Breadcrumb title="Contact Us" middle={{ url: '', text: '' }} last='Contact Us' />
      <Contact/>
    </>
  )
}

export default ContactPage