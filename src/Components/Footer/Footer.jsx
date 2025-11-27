import React from 'react'
import logo from '../../assets/images/footer-logo.png'
import locationIcon from '../../assets/images/footerLocationIcon.png'
import phoneIcon from '../../assets/images/footerPhoneIcon.png'
import emailIcon from '../../assets/images/footerMailIcon.png'
import facebookIcon from '../../assets/images/footerFacebookIcon.png'
import instaIcon from '../../assets/images/footerInstaIcon.png'
import youtubeIcon from '../../assets/images/footerYoutubeIcon.png'

export default function Footer() {
    return (
        <>
            <footer className='bg-[#051c34] py-15'>
                <div id="" className="flex text-white justify-between flex-wrap md:w-11/12 mx-auto sm:w-full">
                    <div className="md:w-3/12 flex flex-col gap-5 items-start">
                        <img src={logo} alt="" srcset="" />
                        <div className="flex items-center gap-3">
                            <img src={locationIcon} alt="" srcset="" />
                            <address className='text-white'>25566 Hc 1,Glenallen,
                                Alaska, 99588, USA</address>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={phoneIcon} alt="" srcset="" />
                            <address className='text-white'>+603 4784 273 12</address>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={emailIcon} alt="" srcset="" />
                            <address className='text-white'>rentcars@gmail.com</address>
                        </div>
                    </div>
                    <div className="md:w-2/12">
                        <h2 className='text-white mb-6 font-medium text-[1rem]'>our products</h2>
                        <ul className=''>
                            <li className='text-white cursor-pointer '>Carrers</li>
                            <li className='text-white cursor-pointer '>cars</li>
                            <li className='text-white cursor-pointer '>Packages</li>
                            <li className='text-white cursor-pointer '>Features</li>
                            <li className='text-white cursor-pointer '>Priceline</li>
                        </ul>
                    </div>
                    <div className="md:w-2/12">
                        <h2 className='text-white mb-6 font-medium text-[1rem]'>about rent cars</h2>
                        <ul className=''>
                            <li className='text-white cursor-pointer '> why choose us</li>
                            <li className='text-white cursor-pointer '>our story</li>
                            <li className='text-white cursor-pointer '>investor relations</li>
                            <li className='text-white cursor-pointer '>press center</li>
                            <li className='text-white cursor-pointer '>advertise</li>
                        </ul>
                    </div>
                    <div className="md:w-2/12">
                        <h2 className='text-white mb-6 font-medium text-[1rem]'>resources</h2>
                        <ul className=''>
                            <li className='text-white cursor-pointer '>download</li>
                            <li className='text-white cursor-pointer '>help center</li>
                            <li className='text-white cursor-pointer '>guides</li>
                            <li className='text-white cursor-pointer '>partner network</li>
                            <li className='text-white cursor-pointer '>cruises</li>
                            <li className='text-white cursor-pointer '>developer</li>
                        </ul>
                    </div>
                    <div className="md:w-2/12">
                        <h2 className='text-white mb-6 font-medium text-[1rem]'>follow us</h2>
                        <div className="flex gap-1.5">
                            <img src={facebookIcon} alt="" srcset="" className='w-6' />
                            <img src={instaIcon} alt="" srcset="" className='w-6' />
                            <img src={youtubeIcon} alt="" srcset="" className='w-6' />
                        </div>
                    </div>
                    <hr class="w-full h-[0.25px] my-8 text-[#f5f5f562]" />
                    <p className='text-white my-5 ms-3'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}
