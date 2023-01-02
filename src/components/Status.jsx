import React from 'react'

function Status() {
    return (
   
    <>
 <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
            {/* <!-- text - start --> */}
            <div className="mb-10 md:mb-16">
                <center className="mb-5">
                    <h1 class="font-bold text-4xl"><span class="text-red-500">OUR
                        </span><span><b> STATUS</b></span>
                    </h1>
                </center>

                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple
                    filler text, also known as placeholder text. It shares some characteristics of a real written text
                    but is random or otherwise generated.</p>
            </div>
            {/* <!-- text - end --> */}

            <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x gap-8 md:gap-0">
                {/* <!-- stat - start --> */}
                <div className="flex flex-col items-center md:p-4">
                    <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">200</div>
                    <div className="text-sm sm:text-base font-semibold">People</div>
                </div>
                {/* <!-- stat - end --> */}

                {/* <!-- stat - start --> */}
                <div className="flex flex-col items-center md:p-4">
                    <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">500+</div>
                    <div className="text-sm sm:text-base font-semibold">People</div>
                </div>

                {/* <!-- stat - start --> */}
                <div className="flex flex-col items-center md:p-4">
                    <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">1000+</div>
                    <div className="text-sm sm:text-base font-semibold">Customers</div>
                </div>
                {/* <!-- stat - end --> */}

                {/* <!-- stat - start --> */}
                <div className="flex flex-col items-center md:p-4">
                    <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">A couple</div>
                    <div className="text-sm sm:text-base font-semibold">Coffee breaks</div>
                </div>
                {/* <!-- stat - end --> */}
            </div>
        </div>
    </div>
    </>

    )
}

export default Status