import AuthForm from '@/components/Auth'
import React from 'react'

const Signup = () => {
  return (
    <section className='signin-container'>
      <AuthForm 
        type='sign-up'
      />
    </section>
    
  )
}

export default Signup