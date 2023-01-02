import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

    function MyNavbar() {
        var x = document.getElementById("mobile-menu-2");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    return (
        // <!-- ======= Navbar Section Start======= -->
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ddark:bg-gray-800 fixed w-full z-20 top-0 left-0">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src="assets/img/logo1.jpeg" className=" h-12 sm:h-16" alt="Flowbite Logo" />
                        {/* <!-- <span className="self-center text-xl font-semibold whitespace-nowrap ddark:text-white">Flowbite</span> --> */}
                    </a>
                    <div className="flex items-center lg:order-2">
                        {/* <!-- <a href="#" className="text-gray-800 ddark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ddark:hover:bg-gray-700 focus:outline-none ddark:focus:ring-gray-800">Log in</a> --> */}
                        <a href="#" className="hidden sm:block text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ddark:bg-red-600 ddark:hover:bg-red-700 focus:outline-none ddark:focus:ring-red-800">Contact Us</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" onClick={()=> MyNavbar()}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ddark:text-gray-400 ddark:hover:bg-gray-700 ddark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>

                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="mt-2 sm:mt-0 flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to={'/'}
                                    className="block py-2 pr-4 pl-3 text-red-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 ddark:text-gray-400 lg:ddark:hover:text-white ddark:hover:bg-gray-700 ddark:hover:text-white lg:ddark:hover:bg-transparent ddark:border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 ddark:text-gray-400 lg:ddark:hover:text-white ddark:hover:bg-gray-700 ddark:hover:text-white lg:ddark:hover:bg-transparent ddark:border-gray-700">About Us</Link>
                            </li>
                            <li>
                                <Link to={'/services'}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 ddark:text-gray-400 lg:ddark:hover:text-white ddark:hover:bg-gray-700 ddark:hover:text-white lg:ddark:hover:bg-transparent ddark:border-gray-700">Services</Link>
                            </li>
                            <li>
                                <Link to={'/projects'}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 ddark:text-gray-400 lg:ddark:hover:text-white ddark:hover:bg-gray-700 ddark:hover:text-white lg:ddark:hover:bg-transparent ddark:border-gray-700">Projects</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 ddark:text-gray-400 lg:ddark:hover:text-white ddark:hover:bg-gray-700 ddark:hover:text-white lg:ddark:hover:bg-transparent ddark:border-gray-700">Contact us</Link>
                            </li>
                            <li>
                                <Link to={'/contact'} className="mt-1 sm:hidden block text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ddark:bg-red-600 ddark:hover:bg-red-700 focus:outline-none ddark:focus:ring-red-800">Contact Us</Link>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        // <!-- ======= Navbar Section End======= -->

        // <nav className="bg-white px-2 sm:px-4 py-2 ddark:bg-gray-800 fixed w-full z-20 top-0 left-0 shadow ddark:border-gray-600">
        //     <div className="container flex flex-wrap items-center justify-between mx-auto">
        //         <a href="/" className="flex items-center">
        //             <span className="pl-3 text-green-700 self-center text-xl font-bold whitespace-nowrap ddark:text-white">Project Palace</span>
        //         </a>
        //         <div className="flex md:order-2">
        //             <a href='https://wa.me/message/5XWWJKY6UH5EG1' type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm px-3 py-2 rounded-full text-center mr-3 md:mr-0 ddark:bg-green-500 ddark:text-black ddark:hover:bg-green-700 ddark:focus:ring-green-800"> <i className="fa fa-whatsapp "></i> </a>
        //             {/* <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ddark:text-gray-400 ddark:hover:bg-gray-700 ddark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        //                 <span className="sr-only">Open main menu</span>
        //                 <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        //             </button> */}
        //         </div>
        //         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        //             <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ddark:bg-gray-800 md:ddark:bg-gray-900 ddark:border-gray-700">
        //                 <li>
        //                     <a href="#" className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 ddark:text-white" aria-current="page">Home</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:ddark:hover:text-white ddark:text-gray-400 ddark:hover:bg-gray-700 ddark:hover:text-white md:ddark:hover:bg-transparent ddark:border-gray-700">About</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:ddark:hover:text-white ddark:text-gray-400 ddark:hover:bg-gray-700 ddark:hover:text-white md:ddark:hover:bg-transparent ddark:border-gray-700">Services</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:ddark:hover:text-white ddark:text-gray-400 ddark:hover:bg-gray-700 ddark:hover:text-white md:ddark:hover:bg-transparent ddark:border-gray-700">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar