import React from 'react'
import ImageCard from './ImageCard';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';


const PhotoGallery = () => {
  return (
    <div className='my-20 bg-white flex flex-col justify-center items-center'>
        <h3 className='text-3xl font-semibold my-14'>Photos</h3>
        {/* All my photos will be listed inside this dev */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20'>

            {/* Image card */}
            
            <ImageCard 
               title="The Beach" 
               author="roshan28" 
               img="https://cdn.pixabay.com/photo/2022/09/17/21/18/butterfly-7461850_1280.jpg"
               price={10}
               icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
               icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
            />
            <ImageCard 
               title="COder" 
               author="roshan" 
               img="https://cdn.pixabay.com/photo/2024/10/03/12/15/butterfly-9093549_1280.jpg"
               price={10}
               icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
               icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
            />
            <ImageCard 
               title="The Beach" 
               author="roshan28" 
               img="https://cdn.pixabay.com/photo/2022/09/17/21/18/butterfly-7461850_1280.jpg"
               price={10}
               icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
               icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
            />
            <ImageCard 
               title="The Beach" 
               author="roshan28" 
               img="https://cdn.pixabay.com/photo/2022/09/17/21/18/butterfly-7461850_1280.jpg"
               price={10}
               icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
               icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
            />
            <ImageCard 
               title="The Beach" 
               author="roshan28" 
               img="https://cdn.pixabay.com/photo/2022/09/17/21/18/butterfly-7461850_1280.jpg"
               price={10}
               icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
               icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
            />
           

        </div>
    </div>
  )
}

export default PhotoGallery