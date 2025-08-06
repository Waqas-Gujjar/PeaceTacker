import React from 'react'
import image1 from "../assets/images/image1.gif"; // Adjust the path as necessary
import image2 from "../assets/images/image2.gif"; // Adjust the path as necessary   
import image3 from "../assets/images/image3.gif"; // Adjust the path as necessary

const Bar = () => {
  return (
    <>
    <div>
        <div className=" p-4 text-white flex items-center justify-between">
            <div>
              <img src={image1} alt="Passenger Settlement" className="w-60" />
              
            </div>
            <div>
                <img src={image2} alt="Passenger Settlement" className="w-60" />
                

            </div>
            <div>
                <img src={image3} alt="Passenger Settlement" className="w-60" />
                 

            </div>
           
            </div>

    </div>
    </>
  )
}

export default Bar;