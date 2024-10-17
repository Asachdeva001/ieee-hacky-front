import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-[100%] flex align-middle justify-between sticky'>
      <div className='flex align-middle justify-center'><img src="" alt="" /></div>
      <div className='flex align-middle justify-center m-4'><ul className='flex justify-center font-medium text-[20
      px] align-middle p-2 space-x-2'>
        <li><Link to='/' className='nav-link'>Home</Link></li>
        <li><Link to='/about' className='nav-link'>About</Link></li>
        <li><Link to='/Contact us' className='nav-link'>Contact Us</Link></li>
      </ul></div>
      <div className='flex align-middle justify-center m-4 space-x-2'>
        <Link to='/signin' className='nav-link align-middle p-2'>Sign In</Link>
        <Link to='/signup' className='text-black bg-white rounded-lg p-2 hover:bg-green-900 hover:text-white'>{'Get Started >'}</Link>
      </div>
    </div>
  )
}
