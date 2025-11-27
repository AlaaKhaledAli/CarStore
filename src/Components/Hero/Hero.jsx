import React from 'react'
import car from '../../assets/images/car.png'
import styles from './Hero.module.css'
export default function Hero() {
    return (
        <>
            <section id="hero">
                <div className="flex flex-wrap ms-5 pt-[30px] ps-[32px] gap-[5px] items-center justify-between">
                    <div className="content text-center md:w-5/12">
                        <h1 className='font-bold text-[3rem] '>Find, book and rent a car  <span className='text-[#1572d3]'>Easily</span></h1>
                        <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                    </div>
                    <div className={`${styles.imgContainer} md:w-6/12 pt-15 h-full`}>
                        <img src={car} alt="" srcSet="" className={`${styles.Animate} w-[100%]`} />
                    </div>
                </div>
            </section>
        </>
    )
}
