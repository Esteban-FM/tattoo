import { useState } from 'react';

export default function Card() {
 
    return(


      <div className="relative bg-white dark:bg-black flex justify-center items-center ">

      <div class="bg-base-100 grid grid-rows-5 sm:grid-rows-2  grid-cols-1   sm:grid-cols-11 mt-2">



      <div className="card bg-base-100 w-96  row-span-2 row-start-1 sm:row-start-1 col-span-1 col-start-2 sm:col-span-4 sm:col-start-2">
  <div className="card-body">
  <h2 className="card-title text-2xl font-bold mb-2">*Que te recomiendo?</h2>
    <p className=' text-md font-semibold'>1./ No te retires el parche antes de tiempo.</p>
    <p className=' text-md font-semibold'>2./ Lava con Jabón Neutro.</p>
    <p className=' text-md font-semibold'>3./ Evita el uso de medicamentos para la piel.</p>
    <p className=' text-md font-semibold'>4./ HAZ CASO A TODO(recuerda queremos un buen tatuaje).</p>

    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}

  </div>
</div>
      <div className="card bg-base-100 w-96  row-span-2  row-start-4 sm:row-start-1 col-span-1 col-start-2 sm:col-span-4 sm:col-start-7">
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold mb-2">*Como cuidarlo:</h2>
    <p className=' text-md font-semibold'>1./ No tomes alcohol los primeros días.</p>
    <p className=' text-md font-semibold'>2./ 0 días de alberca y sol.</p>
    <p className=' text-md font-semibold'>3./ No te rasques.</p>
    <p className=' text-md font-semibold'>4./ Hidratalo 2 veces al días (sin excederte).</p>


  </div>
</div>







          


  </div>
  
  </div>



    );
}