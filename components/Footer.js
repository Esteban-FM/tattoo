import { useState } from 'react';

export default function Footer() {
 
    return(


<footer className="bg-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  gap-4 mt-10 mb-5">
{/* linea */}
      <hr className="my-4 border-t-2 border-zinc-800" />

      <div className="grid lg:grid-cols-12 grid-cols-1 grid-rows-3 sm:grid-rows-1 text-center ">
          
            <div className=" col-start-1 col-span-2 row-start-1 row-span-1 px-2 font-bold">
            <p>&copy; Agosto 2024</p>
            </div>

            <div className="sm:col-start-5 sm:col-span-5 row-span-1 row-start-2 sm:row-start-1 px-2  ">
            <p id="address">Curso FullStack Modulo 3 </p>
            </div>

            <div className=" col-start-1 col-span-2  sm:col-start-12  mt-2 sm:mt-0   row-span-1 row-start-3 sm:row-start-1 px-2">
            <p><a href="https://github.com/Esteban-FM">Github</a></p>
            </div>

        </div>
      </footer>


    );
}