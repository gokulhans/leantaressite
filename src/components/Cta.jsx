import React from 'react'

function Cta() {
    return (
    <section className="bg-white ddark:bg-gray-900">
    <div
        className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full rounded-md" src="assets/img/ProjectsLe/Residence at mukkam .jpg" alt="dashboard image"/>
        {/* <!-- <img className="w-full hidden ddark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"> --> */}
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 ddark:text-white">Let's create more
                tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg ddark:text-gray-400">Flowbite helps you connect with
                friends and communities of people who share your interests.</p>
            <div className="inline-flex rounded-md shadow">
                <a href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Hire
                    Us</a>
            </div>
        </div>
    </div>
</section>

    )
}

export default Cta