import React from 'react'
import brand2 from '../../assets/images/brand1.png'
import brand1 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import brand4 from '../../assets/images/brand4.png'
import brand5 from '../../assets/images/brand5.png'
import styles from './Brands.module.css'

export default function Brands() {
    return (
        <>
            <section id="brands">
                {/* <marquee className="flex overflow-hidden" direction="left" scrollamount="10">
                    <div className={`${styles.groupDelay} flex gap-10 my-10`}>
                        <img src={brand1} alt="" className="w-[25%] shrink-0" />
                        <img src={brand2} alt="" className="w-[25%] shrink-0" />
                        <img src={brand3} alt="" className="w-[25%] shrink-0" />
                        <img src={brand4} alt="" className="w-[25%] shrink-0" />
                        <img src={brand5} alt="" className="w-[25%] shrink-0" />
                    </div>
                </marquee> */}
                <div class={styles.slider}>
                    <div class={styles.slideTrack}>
                        <div class={styles.slide}>
                            <img src={brand1}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand2}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand3}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand4}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand5}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand1}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand2}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand3}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand4}  alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={brand5}  alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
