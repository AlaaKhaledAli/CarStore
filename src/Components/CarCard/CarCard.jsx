import React from 'react'
import { Link } from 'react-router-dom'
import personIcon from '../../assets/images/carPersonIcon.png'
import starICon from '../../assets/images/starIcon.png'
import connectorIcon from '../../assets/images/connectorIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
export default function CarCard(prop) {
  return (
    <>
      <div className="sm:w-8/12 mx-auto md:w-3/12  card py-3 px-1">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/car/${prop.car.id}`}>
            <img
              className="rounded-t-lg mt-5 ms-5"
              src={prop.imgSrc}
              alt=""
            />
          </Link>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                {prop.car.car}
              </h5>
            </a>
            <div className="flex flex-wrap items-center space-x-1">
              <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="yellow" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
              <p>(1345 reviews)</p>
              <div className="details flex flex-wrap justify-between px-0.5">
                <div className="wrapper flex items-start">
                  <img src={personIcon} alt="" srcset="" />
                  <p>2 Passanger</p>
                </div>
                <div className="wrapper flex items-start">
                  <img src={starICon} alt="" srcset="" />
                  <p>Air conditioning</p>
                </div>
                <div className="wrapper flex items-start">
                <FontAwesomeIcon icon={faCalendarDays} />
                  <p>2021</p>
                </div>
                <div className="wrapper flex items-start">
                  <img src={connectorIcon} alt="" srcset="" />
                  <p>Automatic</p>
                </div>
              </div>
            </div>
            <hr className='text-gray-300 my-5'/>
            <div className="priceContainer flex justify-between my-5 ">
              <h3 className='text-gray-600 font-light text-xl'>Price</h3>
              <p>{prop.car.price}/<span className='text-gray-600'>Day</span></p>
            </div>
                      <Link to={`/car/${prop.car.id}`}
                                    className="text-white bg-[#0d6efd] hover:bg-[#0b5ed7] w-full flex justify-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
              View details
              <svg
                className="-mr-1 ml-2 h-4 w-4"
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
          </div>
        </div>
      </div >
    </>
  )
}
