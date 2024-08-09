

export default function Video() {
 
    return(


    <div className="relative bg-zinc-50 dark:bg-black flex justify-center items-center sm:mb-4">

        <div className="">
      <video className="h-full w-full " controls autoPlay>
      <source src="https://www.pexels.com/download/video/4124032/" type="video/mp4" />
    </video>

      </div>

    </div>


);
}