import React from 'react'

import './slider.scss'
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const photo = require('../../images/foto__slider.png')

const Slider: React.FC = () => {
    return (
        <div className='slider'>
            <div className='container'>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper" spaceBetween={20}>
                    <SwiperSlide>
                        <div className='slider__case'>
                            <h2 className='slider__title'>Быть на стиле - <br /> значить быть первым</h2>
                            <h3 className='slider__caption'>-20% летняя  распродажа</h3>
                            <a href="##" className='slider__link'>Условия проведения акции</a>
                            <a href="##" className='slider__btn btn'>Подробнее</a>
                            <img src={photo} alt='Face' className='slider__img'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider__case'>
                            <h2 className='slider__title'>Быть на стиле - <br /> значить быть первым</h2>
                            <h3 className='slider__caption'>-20% летняя  распродажа</h3>
                            <a href="##" className='slider__link'>Условия проведения акции</a>
                            <a href="##" className='slider__btn btn'>Подробнее</a>
                            <img src={photo} alt='Face' className='slider__img'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider__case'>
                            <h2 className='slider__title'>Быть на стиле - <br /> значить быть первым</h2>
                            <h3 className='slider__caption'>-20% летняя  распродажа</h3>
                            <a href="##" className='slider__link'>Условия проведения акции</a>
                            <a href="##" className='slider__btn btn'>Подробнее</a>
                            <img src={photo} alt='Face' className='slider__img'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider__case'>
                            <h2 className='slider__title'>Быть на стиле - <br /> значить быть первым</h2>
                            <h3 className='slider__caption'>-20% летняя  распродажа</h3>
                            <a href="##" className='slider__link'>Условия проведения акции</a>
                            <a href="##" className='slider__btn btn'>Подробнее</a>
                            <img src={photo} alt='Face' className='slider__img'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Slider