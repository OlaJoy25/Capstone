/* eslint-disable react/prop-types */
import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function MainImage({
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  
}) {

  return (
    <div>
      <div>
        <div
          className="relative flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
          />
          
              
                  
             
        </div>
      </div>
      
    </div>
  );
}
