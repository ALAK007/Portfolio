import React from 'react'

const Footer = () => {
  return (
    <div className='fixed w-full h-[50px] bg-[#0a192f] flex items-center px-4 mb-0'>
       <div>
              <p className=''>
                &copy; {new Date().getUTCFullYear()} Powred by Lakhdar Ayoub
              </p>
        </div>
    </div>
  )
}

export default Footer
