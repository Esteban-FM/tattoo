import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
        Home

        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="lg:mb-0 mb-10">
                        <div className="group w-full h-full">
                            <div className="relative h-full">
                                <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                <h1 className=" font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11"></h1>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50  p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                        <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11"> Send Us A Message From</h2>
                    </div>

                </div>
            </div>
        </section>






    </main>
  );
}
