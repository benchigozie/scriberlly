import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import logo from '../src/assets/images/scriberlly_logo.png'

function Footer() {

  const [inputFocus, setInputFocus] = useState(false);
  return (
    <footer className='bg-my-black py-2 flex justify-center items-center text-my-off-white font-inter'>
      <div className='w-5/6 max-w-[1280px]'>
        <div className='flex flex-col gap-24 py-24'>
          <div className='flex flex-col md:flex-row gap-16 justify-between items-center'>
            <div>
              <p className='text-3xl font-bold'>Join our newsletter</p>
              <p>We will send you updates about our services and products.</p>
            </div>
            <div className={`flex justify-center items-center rounded-full p-1 ${inputFocus ? 'outline-2 outline-my-orange' : ''}`}>
              <input
                type="text"
                placeholder='Enter your email'
                className='rounded-full py-2 px-4 w-full text-my-off-white outline-0'
                onFocus={() => {
                  setInputFocus(true);
                }}
                onBlur={() => {
                  setInputFocus(false);
                }}
              />
              <Button btnText="Sign Up" className='bg-my-orange hover:bg-my-highlight text-my-off-white rounded-full p-2' />
            </div>
          </div>
          <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 min-w-3/4'>
              <div>
                <h5 className='font-bold'>Company</h5>
                <ul>
                  <li><Link>About Us</Link></li>
                  <li><Link>Services</Link></li>
                  <li><Link>Shop</Link></li>
                </ul>
              </div>
              <div>
                <h5 className='font-bold'>Contact</h5>
                <ul>
                  <li><Link>0701-111-1111</Link></li>
                  <li><Link>abcdefghijklmg@gamail.com</Link></li>
                </ul>
              </div>
              <div>
                <h5 className='font-bold'>social</h5>
                <ul>
                  <li><Link>Facebook</Link></li>
                  <li><Link>Instagram</Link></li>
                  <li><Link>LinkedIn</Link></li>
                </ul>
              </div>
              <div>
                <h5 className='font-bold'>Legal</h5>
                <ul>
                  <li><Link>Terms</Link></li>
                  <li><Link>Cookies</Link></li>
                  <li><Link>Licenses</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='bg-my-off-white h-[1px] border-0' />
        <div className='py-3'><p>Scriberlly &#169; 2024. All rights reserved.</p></div>
      </div>
    </footer>
  )
}

export default Footer;