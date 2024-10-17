import React from 'react'

export default function Footer() {
    return (
        <div className=''>
            <div class="container flex justify-center align-middle text-white"><ul className='flex justify-center align-middle space-x-5 text-[20px]'>
                <li class="nav-link"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li class="nav-link"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                <li class="nav-link"><a href="#"><i class="fa-brands fa-github"></i></a></li>
                <li class="nav-link"><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                <li class="nav-link"><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
            </ul></div>
            <div class="container flex justify-center align-middle text-white"><ul className='flex justify-center align-middle space-x-3 text-[15px]'>
                <li class="nav-link"><a href="#">Home</a></li>
                <li class="nav-link"><a href="#">About Us</a></li>
                <li class="nav-link"><a href="#">Contact Us</a></li>
            </ul></div>
            <div></div>
        </div>
    )
}
