import React from 'react'
import Contact from '../../components/Contact/Contact'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const ContactPage = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" middle={{ url: '', text: '' }} last='Contact Us' />
      <Contact/>
    </>
  )
}

export default ContactPage