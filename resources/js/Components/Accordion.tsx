// import React from 'react'

// const Accordion = () => {
//   return (
//     <>
//         <br></br>
//         <div id="accordion-nested-parent" className="relative max-w-4xl mx-auto px-4" data-accordion="collapse">
//         <h2 id="accordion-collapse-heading-1">
//             <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-purple-300 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
//             <span>What is Flowbite?</span>
//             <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//             </svg>
//             </button>
//         </h2>
//         <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
//             <div className="p-5 border border-b-0 border-purple-300 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 text-black dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
//             <p className="mb-2 text-black dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
//             <p className="mb-4 text-black dark:text-gray-400">What are the differences between Flowbite and Tailwind UI?</p>
//             <div id="accordion-nested-collapse" data-accordion="collapse">
//                 <h2 id="accordion-nested-collapse-heading-1">
//                 <button type="button" className="flex items-center justify-between w-full p-5 rounded-t-xl font-medium rtl:text-right text-black border border-b-0 border-purple-300 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-1" aria-expanded="false" aria-controls="accordion-nested-collapse-body-1">
//                     <span>Open source</span>
//                 <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//                     </svg>
//                 </button>
//                 </h2>
//                 <div id="accordion-nested-collapse-body-1" className="hidden" aria-labelledby="accordion-nested-collapse-heading-1">
//                 <div className="p-5 border border-b-0 border-purple-300 dark:border-gray-700">
//                     <p className="text-black dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
//                 </div>
//                 </div>
//                 <h2 id="accordion-nested-collapse-heading-2">
//                 <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-purple-300 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-2" aria-expanded="false" aria-controls="accordion-nested-collapse-body-2">
//                     <span>Architecture</span>
//                     <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//                     </svg>
//                 </button>
//                 </h2>
//                 <div id="accordion-nested-collapse-body-2" className="hidden" aria-labelledby="accordion-nested-collapse-heading-2">
//                 <div className="p-5 border border-b-0 border-purple-300 dark:border-gray-700">
//                     <p className="text-black dark:text-gray-400">Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
//                 </div>
//                 </div>
//                 <h2 id="accordion-nested-collapse-heading-3">
//                 <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-purple-300 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-3" aria-expanded="false" aria-controls="accordion-nested-collapse-body-3">
//                     <span>Can I use both?</span>
//                     <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//                     </svg>
//                 </button>
//                 </h2>
//                 <div id="accordion-nested-collapse-body-3" className="hidden" aria-labelledby="accordion-nested-collapse-heading-3">
//                 <div className="p-5 border border-purple-300 dark:border-gray-700">
//                     <p className="mb-2 text-black dark:text-gray-400">We actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
//                     <p className="mb-2 text-black dark:text-gray-400">Learn more about these technologies:</p>
//                     <ul className="ps-5 text-black list-disc dark:text-gray-400">
//                     <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
//                     <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
//                     </ul>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         <h2 id="accordion-collapse-heading-2">
//             <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-purple-300 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
//             <span>Is there a Figma file available?</span>
//             <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//             </svg>
//             </button>
//         </h2>
//         <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
//             <div className="p-5 border border-purple-300 dark:border-gray-700">
//             <p className="mb-2 text-black dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
//             <p className="text-black dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
//             </div>
//         </div>
//         </div>

//     </>
//   )
// }


// export default Accordion;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Cambiar de índice para abrir o cerrar
  };

  return (
    <>
      <br />
      <div
        id="accordion-nested-parent"
        className="relative max-w-4xl mx-auto px-4"
        data-accordion="collapse"
      >
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-purple-300 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={openIndex === 0}
            aria-controls="accordion-collapse-body-1"
            onClick={() => toggleAccordion(0)}
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transform transition-all ${
                openIndex === 0 ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>

        <AnimatePresence>
          {openIndex === 0 && (
            <motion.div
              id="accordion-collapse-body-1"
              className="p-5 border border-b-0 border-purple-300 dark:border-gray-700 dark:bg-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }} // Animación de salida
              transition={{ duration: 0.6 }} // Animación más lenta
              aria-labelledby="accordion-collapse-heading-1"
            >
              <p className="mb-2 text-black dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns, modals,
                navbars, and more.
              </p>
              <p className="mb-2 text-black dark:text-gray-400">
                Check out this guide to learn how to{' '}
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  get started
                </a>{' '}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
              <p className="mb-4 text-black dark:text-gray-400">
                What are the differences between Flowbite and Tailwind UI?
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Repeat the same for other accordion items */}
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-purple-300 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={openIndex === 1}
            aria-controls="accordion-collapse-body-2"
            onClick={() => toggleAccordion(1)}
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transform transition-all ${
                openIndex === 1 ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>

        <AnimatePresence>
          {openIndex === 1 && (
            <motion.div
              id="accordion-collapse-body-2"
              className="p-5 border border-b-0 border-purple-300 dark:border-gray-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }} // Animación de salida
              transition={{ duration: 0.6 }} // Animación más lenta
              aria-labelledby="accordion-collapse-heading-2"
            >
              <p className="mb-2 text-black dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-black dark:text-gray-400">
                Check out the{' '}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Figma design system
                </a>{' '}
                based on the utility classes from Tailwind CSS and components from
                Flowbite.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Accordion;
