import React from 'react';
import '../App.css';
import ImageSlider from './slider';
import SliderData from './sliderdata';

function MainPage()
{
    return (
        <div>
        <br></br>
        <br></br>
        <div>
            <h3 className="title">eCasa</h3>
        </div>
        
        <div className="txt2">
            eCasa este cel mai nou si cel mai bine aprovizionat magazin din Romania.La noi gasiti cele mai bune electrocasnice si obiecte de mobilier.<br></br>
        </div>
        <ImageSlider slides={SliderData}></ImageSlider>
        <div>
            Relatii cu clientii: +40765123456:
        </div>
        <br></br>
        <br></br>

        </div>
    );
}

export default MainPage;