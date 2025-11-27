import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import car2 from '../../assets/images/audi1.png';
import personIcon from '../../assets/images/carPersonIcon.png'
import starICon from '../../assets/images/starIcon.png'
import connectorIcon from '../../assets/images/connectorIcon.png'
import doorIcon from "../../assets/images/carDoorICon.png"

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(
        () => {
            axios.get(`https://myfakeapi.com/api/cars/${id}`)
                .then(res => setCar(res.data.Car))
        }, [])
    return (
        <>
            <section id="why">
                <div className="md:w-11/12 sm:w-full mx-auto">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center gap-1 text-sm text-gray-700 text-3xl">
                            <li>
                                <Link to='/home' className="block transition-colors hover:text-gray-900 text-blue-600 underline underline-offset-2"> Home </Link>
                            </li>

                            <li className="rtl:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 20.247 6-16.5"></path>
                                </svg>
                            </li>

                            <li>
                                <Link className="block transition-colors hover:text-gray-900 text-blue-600 underline underline-offset-2" to="/cars"> Cars </Link>
                            </li>
                            <li className="rtl:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 20.247 6-16.5"></path>
                                </svg>
                            </li>
                            <li>
                                <Link className="block transition-colors hover:text-gray-900"> Car Details </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="why flex flex-wrap">
                    <div className="md:w-6/12 sm:w-11/12 my-20 ">
                        <img src={car2} alt="" className='w-[75%]' />
                    </div>
                    <div className="md:w-6/12 sm:w-11/12 ">
                        <h3 className='w-fit bg-[#edf1fa] uppercase rounded-md text-2xl px-5 py-2 text-[#4a70f8] border mt-20 mb-5  border-[#1572d31a]'>why choose us</h3>
                        <h2 className='text-3xl text-black font-extrabold capitalize'>We offer the best experience with our rental deals</h2>
                        <ul className='list-none mt-10 ms-2'>
                            <li className='flex gap-5 items-center my-5'>
                                <img src={personIcon} alt="" srcset="" />
                                <div className="content">
                                    <h2 className='text-gray-600'>2 Passanger.</h2>
                                </div>
                            </li>
                            <li className='flex gap-5 items-center my-5 '>
                                <img src={starICon} alt="" srcset="" />
                                <div className="content">
                                    <h2 className='text-gray-600'>Air conditioning</h2>
                                </div>
                            </li>
                            <li className='flex gap-5 items-center my-5 '>
                                <img src={connectorIcon} alt="" srcset="" />
                                <div className="content">
                                    <h2 className='text-gray-600'>CVT</h2>
                                </div>
                            </li>
                            <li className='flex gap-5 items-center my-5 '>
                                <img src={doorIcon} alt="" srcset="" />
                                <div className="content">
                                    <h2 className='text-gray-600'>Doors</h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
