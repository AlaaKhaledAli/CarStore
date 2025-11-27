import React from 'react'
import Iphone from '../../assets/images/iPhon.png'
import styles from './Contact.module.css'
import apple from '../../assets/images/appleStore.png'
import googleplay from '../../assets/images/google.png'
import bg from '../../assets/images/contact-bg.png'

export default function Contact() {
    return (
        <>
            <section id="contact" className="contact mt-25 ps-15">
                <div className="contact flex flex-wrap md:w-11/12 mx-auto sm:w-full ">
                    <div className={`${styles.bgImg} md:w-6/12 mb-10`}>
                        <h2 className='text-3xl text-black font-extrabold capitalize mt-15'>Download Rentcars App for <span className='text-[#1572d3]'>FREE</span></h2>
                        <h3 className='mb-3 mt-2.5 text-[1.3rem]'>For faster, easier booking and exclusive deals.</h3>
                        <div className="payment-container flex gap-2 my-5">
                            <img src={apple} alt="" srcset="" />
                            <img src={googleplay} alt="" srcset="" />
                        </div>
                        <form action="" className='flex flex-col gap-4'>
                            <div className="input-container">
                                <input type="text" className='bg-[#cedcff]  w-8/12 text-[#212540]  py-2.5 px-4 rounded-3xl' placeholder='Name' />
                            </div>
                            <div className="input-container">
                                <input type="tel" className='bg-[#cedcff]  w-8/12 text-[#212540]  py-2.5 px-4 rounded-3xl' placeholder='Phone' />
                            </div>
                            <div className="input-container">
                                <input type="email" className='bg-[#cedcff]  w-8/12 text-[#212540]  py-2.5 px-4 rounded-3xl' placeholder='Email' />
                            </div>
                            <div className='w-8/12'>
                                <button className='bg-blue-500 text-white text-[16px] rounded-xl py-1.5 px-5 block w-fit mx-auto'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-6/12 flex justify-start self-end">
                        <img src={Iphone} className='w-[70%] h-[80%]' alt="" srcset="" />
                    </div>
                </div>
            </section>
        </>
    )
}
