import AuthForm from '@/components/Auth'
import React from 'react'

const Signin = () => {
  return (
    <section className='signin-container'>
      <AuthForm 
        type='sign-in'
      />
    </section>
    
  )
}

export default Signin