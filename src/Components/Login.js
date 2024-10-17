import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='flex justify-center align-middle'>
            <div className='flex justify-center align-middle w-[60vw] h-[75vh] bg-white my-5 rounded-[5rem] overflow-hidden'>
                <div className='bg-[rgb(2,41,2)] flex justify-center align-middle w-[60%] h-[100%]' style={{ clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0% 100%)' }}>
                    <div className='text-white w-[60%] h-[100%] flex justify-center align-middle'><div className='align-middle'>
                        <h1 className='text-center w-[100%] font-medium text-[36px] m-2'>Welcome Back!</h1>
                        <p className='text-center w-[100%]'>We are so happy to see you here. Its great to see you again. We hope you had a safe and enjoyable time away</p>
                        <button className='m-2 bg-[rgb(1,6,1)] rounded-full p-2'>Don't have an account? SignUp</button>
                    </div></div>
                </div>
                <div className='flex justify-center align-middle w-[50%] h-[100%]'>
                    <div className='flex justify-center align-middle w-[60%] h-[100%] text-[rgb(2,41,2)]' style={{transform:'translateX(-10%)'}}><div>
                        <h1 className='text-center font-medium text-[36px] my-4'>Login</h1>
                        <p className='text-center w-[100%]'>Enter your login credentials below</p>
                        <input type="email" className="my-4 w-[100%] h-[5vh] p-2 border-black-2 " id="exampleFormControlInput1" placeholder="name@example.com" />
                        <input type="password" id="inputPassword5" className="w-[100%] h-[5vh] p-2 border-black-2" placeholder='password' aria-describedby="passwordHelpBlock" />
                        <Link to='/dashboard' className='bg-[rgb(2,41,2)] text-white font-medium w-[30%] h-[5vh] rounded-full mt-4 p-2'>Login</Link>
                    </div></div>
                </div>
            </div>
        </div>
    )
}
