import React from 'react'

function LoadingCard() {
  return (
    <div className="flex animate-pulse  gap-2 hover:scale-105 duration-300 shadow-md shadow-black rounded-md overflow-hidden flex-col items-center">
    <img
      className="w-full h-60 object-cover object-center"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo50ARQ0WrVm0SsOOax0n4vEkNTnhQny454OlL_MCSMw&s"
      alt=""
    />
    <div className="w-full p-5 flex flex-col gap-2">
    
      <div className="bg-gray-500 w-28 h-4 rounded"></div>

      <div className="flex justify-between items-center">
        <div className="bg-gray-500 w-16 h-4 rounded"></div>
        <div className='bg-gray-500 w-16 h-4 rounded'></div>
      </div>
      <div className="flex justify-between text-lg">
      
        <i
          
          className="fa-solid text-gray-500 cursor-pointer fa-magnifying-glass-plus"
        ></i>
        <i className="fa-solid text-gray fa-heart "></i>
      </div>
    </div>
  </div>
);
}
  


export default LoadingCard