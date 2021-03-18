import React, { useState, useEffect} from 'react'
import './Header.scss'

function Header() {

    useEffect(()=>{
        const imgSlider = document.querySelector('.img-slider');
        const img1 = document.querySelector('.img1');
        const img2 = document.querySelector('.img2');
        const img3 = document.querySelector('.img3');
        const prevBtn = document.querySelector('.prev')
        const nextBtn = document.querySelector('.next')
        
        let counter = 1;
        let counter1 = 1;
        nextBtn.addEventListener('click', function(){
            
            if(counter === 1){
                img3.classList.remove('zOpacity')
                img1.classList.remove('zOpacity')
                img2.classList.add('zOpacity')
                counter++;
            }else if (counter === 2) {
                img1.classList.remove('zOpacity')
                img2.classList.remove('zOpacity')
                img3.classList.add('zOpacity')       
                counter++;
            }else if ( counter === 3){
                img2.classList.remove('zOpacity')
                img3.classList.remove('zOpacity')
                img1.classList.add('zOpacity')
                counter = 1;
            }
        })
        prevBtn.addEventListener('click', function(){
            if(counter === 1){
                img2.classList.remove('zOpacity')
                img1.classList.remove('zOpacity')
                img3.classList.add('zOpacity')  
                counter = 3;
            }else if(counter === 2 && img2.classList.contains('zOpacity') ){
                img3.classList.remove('zOpacity')
                img2.classList.remove('zOpacity')
                img1.classList.add('zOpacity')
                counter = 1;
            }else if (counter === 2) {
                img1.classList.remove('zOpacity')
                img3.classList.remove('zOpacity')
                img2.classList.add('zOpacity')
                counter++;
            }else if(counter === 3 && img3.classList.contains('zOpacity') ){
                img1.classList.remove('zOpacity')
                img3.classList.remove('zOpacity')
                img2.classList.add('zOpacity')
                counter = 2;
            }else if (counter === 3){
                img3.classList.remove('zOpacity')
                img2.classList.remove('zOpacity')
                img1.classList.add('zOpacity')
                counter = 1;
            }
        })
    },[])

    return (
        <div className='img-slider-main img'>
             <div className='img-slider'>
                <div className='img3'>
                    <h1>
                        Shoot for the hoop!
                    </h1>
                    <p>
                        Aiming low is not an option for us
                    </p>
                </div>
                <div className='img2'>
                    <h1>
                        You need a good partner
                    </h1>
                    <p>
                        Let us help you realise your true potential
                    </p>
                </div>
                <div className='img1 zOpacity'>
                    <h1>
                        We can change your digital world
                    </h1>
                    <p>
                        Bold enough to blow a hole in your next marketing campaingn.
                    </p>
                </div>
            </div>
            <div className='prev'></div>
            <div className='next'></div>
        </div> 

    )
}
export default Header
