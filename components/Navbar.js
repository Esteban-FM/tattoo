
export default function Navbar() {
 
    return(


    <div className="relative text-white bg-zinc-800 dark:bg-zinc-900 flex justify-center items-center mb-3">

    <div class="navbar bg-base-100 grid grid-cols-12 mt-2 sas">
    <div class="flex-1 cols-span-1 col-start-2">

        <a class="btn btn-ghosttext-xl font-bold ">K.Tattos</a>
    </div>


    <div class="flex-none col-start-11 flex justify-center items-center">
        <button class="btn btn-square btn-ghost">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current">
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
        </svg>
        </button>
    </div>
</div>
<hr className="my-4 border-t-2 border-zinc-800" />

</div>


);
}
