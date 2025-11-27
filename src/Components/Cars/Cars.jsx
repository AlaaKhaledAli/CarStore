import React, { useEffect, useState } from 'react'
import car1 from '../../assets/images/car1.png'
import car2 from '../../assets/images/car2.png'
import CarCard from '../../Components/CarCard/CarCard.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function Cars() {
    const [cars, setCars] = useState([])
    useEffect(() => {
        axios.get('https://myfakeapi.com/api/cars/')
            .then(res => setCars(res.data.cars))
    }, [])
    return (
        <>
            <section id="cars" className='md:w-11/12 mx-auto sm:w-full '>
                <div className="grow flex shadow-xs md:mx-20">
                    <span className="inline-flex items-center border-[#dee2e6] px-3 text-sm text-body bg-neutral-tertiary border rounded-md rounded-e-[0px] border-default-medium border-e-0 bg-[#f8f9fa]">
                        <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                    </span>
                    <input type="text" id="website-admin" className=" border-[#dee2e6] rounded-none rounded-e-base block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 placeholder:text-body border-e-0" placeholder="elonmusk" />
                    <button className='bg-[#0d6efd] text-white px-5 border border-default-medium border-[#0d6efd] rounded-e-md'>Search</button>
                </div>
                <h3 className='w-fit bg-[#edf1fa] uppercase rounded-md text-2xl px-5 py-2 text-[#4a70f8] border mx-auto my-20  border-[#1572d31a]'>popular rental deals</h3>
                <h2 className='text-center text-6xl text-black font-extrabold capitalize'>most popular cars rental deals</h2>
                <div className="cards flex flex-wrap ">
                    {cars.map((car, indx) => indx <= 3 && <CarCard car={car} imgSrc={indx % 2 == 0 ? car1 : car2} />)}
                </div>
                <Link
                    to='/cars'
                    className="text-[#6c757d] text-2xl mx-auto border-2  border-[#6c757d] hover:bg-[#6c757d] hover:text-white transition w-4/12 flex items-center justify-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Show all vehicles
                    <svg
                        className="-mr-1 ml-2 h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            </section>
        </>
    )
}
