import React, { useEffect, useState } from 'react'
import car1 from '../../assets/images/car1.png'
import car2 from '../../assets/images/car2.png'
import CarCard from '../../Components/CarCard/CarCard.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Cars() {
  const [cars, setCars] = useState([])
  const [carList, setCarList] = useState([])
  const [Pagination, setPagination] = useState(1)
  useEffect(() => {
    axios.get('https://myfakeapi.com/api/cars/')
      .then(res => setCars(res.data.cars))
  }, [])
  useEffect(() => {
    setCarList(cars.slice((Pagination - 1) * 20, Pagination * 20))
  }, [cars, Pagination])
  return (
    <>
      <div className="md:w-11/12 sm:w-full mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-1 text-sm text-gray-700 text-3xl">
            <li>
              <Link to='/home' class="block transition-colors hover:text-gray-900 text-blue-600 underline underline-offset-2"> Home </Link>
            </li>

            <li class="rtl:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 20.247 6-16.5"></path>
              </svg>
            </li>

            <li>
              <Link class="block transition-colors hover:text-gray-900"> Cars </Link>
            </li>
          </ol>
        </nav>
      </div>
      <section id="cars" className='md:w-11/12 mx-auto sm:w-full '>
        <h3 className='w-fit bg-[#edf1fa] uppercase rounded-md text-2xl px-5 py-2 text-[#4a70f8] border mx-auto my-20  border-[#1572d31a]'>popular rental deals</h3>
        <h2 className='text-center text-6xl text-black font-extrabold capitalize'>most popular cars rental deals</h2>
        <div className="cards flex flex-wrap ">
          {carList.map((car, indx) => <CarCard car={car} imgSrc={indx % 2 == 0 ? car1 : car2} />)}
        </div>

        <ul className="flex  my-10 justify-center gap-1 text-gray-900">
          <li>
            <div onClick={() => {
              setPagination((prev) => {
                console.log(prev > 1 ? prev - 1 : prev)
                return prev > 1 ? prev - 1 : prev
              }
              )
            }} className="cursor-pointer grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180" aria-label="Previous page">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </li>

          <li>
            <Link onClick={() => setPagination(carList[0]?(carList[0].id-1)/ 20 + 1:1)}
              className={`${Pagination === (carList[0]?(carList[0].id-1)/ 20 + 1:1)
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-200'
                } block size-8 rounded border text-center text-sm/8 font-medium transition-colors`}>
              {carList[0]?(carList[0].id-1)/ 20 + 1: 1}
            </Link>
          </li>

          <li>
            <Link onClick={() => setPagination(carList[0]?(carList[0].id-1)/ 20 + 2:2)}
              className={`${Pagination === (carList[0]?(carList[0].id-1)/ 20 + 2:2)
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-200'
                } block size-8 rounded border text-center text-sm/8 font-medium transition-colors`}>
              {carList[0]?(carList[0].id-1)/ 20 + 2: 2}
            </Link>
          </li>

          <li>
            <Link onClick={() => setPagination(carList[0]?(carList[0].id-1)/ 20 + 3:3)}
              className={`${Pagination === (carList[0]?(carList[0].id-1)/ 20 + 3:3)
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-200'
                } block size-8 rounded border text-center text-sm/8 font-medium transition-colors`}>
              {carList[0]?(carList[0].id-1)/ 20 + 3: 3}
            </Link>
          </li>

          <li>
            <Link onClick={() =>setPagination(carList[0]?(carList[0].id-1)/ 20 + 4:4)}
              className={`${Pagination === (carList[0]?(carList[0].id-1)/ 20 + 4:4)
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-200'
                } block size-8 rounded border text-center text-sm/8 font-medium transition-colors`}>
              {carList[0]?(carList[0].id-1)/ 20 + 4: 4}
            </Link>
          </li>

          <li>
            <div onClick={() => {
              setPagination((prev) => (prev < 4 ? prev + 1 : prev))
            }} className="cursor-pointer grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180" aria-label="Next page">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </li>
        </ul>



      </section>
    </>
  )
}
