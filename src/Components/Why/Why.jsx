import React from 'react'
import car2 from '../../assets/images/why-car.png'
import chatICon from '../../assets/images/chatIcon.png'
import TFICon from '../../assets/images/24hIcon.png'
import personICon from '../../assets/images/person1Icon.png'
import styles from './Why.module.css'
export default function Why() {
    return (
        <>
          <section id="why">
            <div className={`${styles.whyBg} why flex flex-wrap items-center`}>
              <div className="md:w-6/12 sm:w-11/12 my-20 ">
                <img src={car2} alt="" className='w-[75%]' />
              </div>
              <div className="md:w-6/12 sm:w-11/12 ">
                <h3 className='w-fit bg-[#edf1fa] uppercase rounded-md text-2xl px-5 py-2 text-[#4a70f8] border mt-20 mb-5  border-[#1572d31a]'>why choose us</h3>
                <h2 className='text-3xl text-black font-extrabold capitalize'>We offer the best experience with our rental deals</h2>
                <ul className='list-none mt-24 ms-12'>
                  <li className='flex gap-5 items-center my-5'>
                    <img src={personICon} alt="" srcset="" />
                    <div className="content">
                      <h4 className='text-xl font-bold text-black '>Best price guaranteed</h4>
                      <p>Find a lower price? We’ll refund you 100% of the difference.choose location</p>
                    </div>
                  </li>
                  <li className='flex gap-5 items-center my-5 '>
                    <img src={personICon} alt="" srcset="" />
                    <div className="content">
                      <h4 className='text-xl font-bold text-black '>Best price guaranteed</h4>
                      <p>Find a lower price? We’ll refund you 100% of the difference.choose location</p>
                    </div>
                  </li>
                  <li className='flex gap-5 items-center my-5 '>
                    <img src={chatICon} alt="" srcset="" />
                    <div className="content">
                      <h4 className='text-xl font-bold text-black '>Best price guaranteed</h4>
                      <p>Find a lower price? We’ll refund you 100% of the difference.choose location</p>
                    </div>
                  </li>
                  <li className='flex gap-5 items-center my-5 '>
                    <img src={TFICon} alt="" srcset="" />
                    <div className="content">
                      <h4 className='text-xl font-bold text-black '>Best price guaranteed</h4>
                      <p>Find a lower price? We’ll refund you 100% of the difference.choose location</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
    )
}
