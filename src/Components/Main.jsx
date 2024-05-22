import MaterialUISwitch from "./MaterialUISwitch";
import "../App.css";
import Marquee from "react-fast-marquee";
import AccordionUsage from "./AccordionExpandDefault";
import React, { useState, useEffect } from 'react';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const body = document.querySelector('body');

  useEffect(() => {
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <div className="container mx-auto">
        <main className="flex">
          <div className="sidebar left-0 border-t-[2px] border-r-[2px] border-solid border-slate-400">
            <div className="w-24 h-screen"></div>
             <button onClick={toggleDarkMode} className="fixed bottom-4 left-4">
              <MaterialUISwitch  />
            </button>
          </div>

          <div>
            <div className="content  border-t-[2px] border-solid border-slate-400 py-16 px-12">
              <h1 className="text-3xl font-semibold">
                With 20+ years of providing software development services for
                technological enterprises, successful startups, and AI-empowered
                companies worldwide, our developers demonstrate exceptional
                efficiency and expertise.
              </h1>

              <p className="flex justify-end text-xl">
                On average, Vention clients benefit $600,000+ from annual
                savings as <br /> a result of our collaboration.
              </p>
            </div>

            <div id="redden" className="content flex flex-col gap-12 border-t-[2px] border-solid border-slate-400 py-16 px-12">
              <div className="flex w-full justify-between">
                <h1 className="text-2xl text-rose-950 font-semibold w-1/4">
                  Key stats
                </h1>
                <div className="w-1/4"></div>
                <div className="w-1/4 flex flex-col">
                  <h1 className="text-7xl text-rose-950">500+</h1>
                  <p className="text-xl font-sm">award-winning clients</p>
                </div>
                <div className="w-1/4">
                  <h1 className="text-7xl text-rose-950">$15B+</h1>
                  <p className="text-xl font-sm">in client acquisitions</p>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div className="w-1/4 flex flex-col">
                  <h1 className="text-7xl text-rose-950">36</h1>
                  <p className="text-xl font-sm">award-winning clients</p>
                </div>
                <div className="w-1/4 flex flex-col">
                  <h1 className="text-7xl text-rose-950">20+</h1>
                  <p className="text-xl font-sm">award-winning clients</p>
                </div>
                <div className="w-1/4 flex flex-col">
                  <h1 className="text-7xl text-rose-950">20+</h1>
                  <p className="text-xl font-sm">award-winning clients</p>
                </div>
                <div className="w-1/4">
                  <h1 className="text-7xl text-rose-950">3K+</h1>
                  <p className="text-xl font-sm">in client acquisitions</p>
                </div>
              </div>
            </div>

            <div className="content border-t-[2px] border-solid border-slate-400 py-16 px-12">
              <h1 className="mt-12 text-4xl font-semibold">
                Trusted by the best
              </h1>
              <p className="mt-4 font-sans">
                Companies ranging from early-stage startups to Fortune 500
                enterprises partner with us to develop game-changing growth
                solutions.
              </p>
            </div>

            <div className=" py-4 pt-10 content border-t-[2px] border-solid border-slate-400 items-center">
              {/* <div className="relative overflow-hidden h-24"> */}
              <Marquee className="h-[140px]  left-0 w-[100%] animate-marquee_1s_linear_infinite">
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/ey_eVyZsxY.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/dealcloud-2.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/paypal_RVc4KIP.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/grubhub_cPYd20X.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/Slice_black.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/coca_cola-2.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/Merkle_black.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/Slice_black.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/pwc_2uTD1Rv.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/ibm-2.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/Merkle_black.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/postman_new.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/salesforce_l0Nx3cG.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/uipath-partner-authorized-lockup-digital-rgb-white_1.svg"
                />
              </Marquee>
              {/* </div> */}
            </div>

            <div className="content border-b-[2px] flex w-full border-t-[2px] border-solid border-slate-400 px-8">
              <div className="item border-r-[2px] border-solid border-slate-400 py-4 h-44 px-8 w-1/4">
                <h1 className="font-semibold text-2xl">01 Discovery</h1>
                <h2 className="font-semibold opacity-0">
                  We start with your vision: What do you want to build? How can
                  we accelerate your company’s growth to outpace the
                  competition?
                </h2>
              </div>

              <div className="item border-r-[2px] border-solid border-slate-400 py-4 h-44 px-8 w-1/4">
                <h1 className="font-semibold text-2xl">02 Discovery</h1>
                <h2 className="font-semibold opacity-0">
                  We start with your vision: What do you want to build? How can
                  we accelerate your company’s growth to outpace the
                  competition?
                </h2>
              </div>

              <div className="item border-r-[2px] border-solid border-slate-400 py-4 h-44 px-8 w-1/4">
                <h1 className="font-semibold text-2xl">03 Discovery</h1>
                <h2 className="font-semibold opacity-0">
                  We start with your vision: What do you want to build? How can
                  we accelerate your company’s growth to outpace the
                  competition?
                </h2>
              </div>

              <div className="item py-4 h-44 px-8 w-1/4">
                <h1 className="font-semibold text-2xl">04 Discovery</h1>
                <h2 className="font-semibold opacity-0">
                  We start with your vision: What do you want to build? How can
                  we accelerate your company’s growth to outpace the
                  competition?
                </h2>
              </div>
            </div>

            <div className="content w-full flex py-6  p-2">
              <div className="w-1/2"></div>
              <div className="flex flex-col gap-8 justify-end w-1/2 pt-32">
                <h2 id="redden" className="text-2xl text-rose-950 font-semibold">
                  We speak your language
                </h2>
                <h1 className="text-4xl font-semibold ">
                  Wondering how well we know your industry? Curious which tech
                  stacks we support?
                </h1>
                <p>
                  Spanning 30+ verticals and 25+ technologies, our team has
                  designed and implemented innovative solutions to suit even the
                  most unique needs.
                </p>
              </div>
            </div>

            <div className="content w-full py-10 flex border-t-[2px] border-solid border-slate-400 px-8">
              <div className="left w-1/2">
                <h1 id="redden" className="text-2xl text-rose-950 font-semibold">
                  Expertise
                </h1>
              </div>

              <div className="right w-1/2 flex justify-between">
                <div className="flex link flex-col gap-4">
                  <h1 className="text-2xl underline font-semibold">
                    Software development
                  </h1>
                  <h1 className="text-2xl underline font-semibold">
                    Web development
                  </h1>
                  <h1 className="text-2xl underline font-semibold">
                    Mobile development
                  </h1>
                  <h1 className="text-2xl underline font-semibold">
                    Start Up development
                  </h1>
                  <h1 className="text-2xl underline font-semibold">
                    Cloud services
                  </h1>
                </div>

                <div className="flex  link flex-col gap-4">
                  <h1 className="text-2xl underline font-semibold">
                    Blockchain
                  </h1>
                  <h1 className="text-2xl underline font-semibold">AR / VR</h1>
                  <h1 className="text-2xl underline font-semibold">
                    Salesforce
                  </h1>
                  <h1 className="text-2xl underline font-semibold">
                    Artificial Intelegence
                  </h1>
                  <h1 className="text-2xl underline font-semibold">
                    Internet of things
                  </h1>
                </div>
              </div>
            </div>

            <div className="content w-full py-10 flex border-t-[2px] border-solid border-slate-400 px-8">
              <div className="left w-1/2">
                <h1 id="redden" className="text-2xl text-rose-950 font-semibold">
                  Industries
                </h1>
              </div>

              <div className="right w-1/2 flex justify-between">
                <div className="flex link flex-col gap-4">
                  <h1 className="text-2xl underline font-semibold">Fintech</h1>
                  <h1 className="text-2xl underline font-semibold">
                    Healthtech
                  </h1>
                  <h1 className="text-2xl underline font-semibold">Edtech</h1>
                </div>

                <div className="flex  link flex-col gap-4">
                  <h1 className="text-2xl underline font-semibold">
                    Ecommerce
                  </h1>
                  <h1 className="text-2xl underline font-semibold">
                    Real estate
                  </h1>
                  <h1 className="text-2xl underline font-semibold">
                    Marketing/Adtech
                  </h1>
                </div>
              </div>
            </div>

            <div className="content w-full flex py-6  p-2 border-t-[2px] border-solid border-slate-400">
              <div className="w-1/2"></div>
              <div className="flex flex-col gap-8 justify-end w-1/2 pt-32">
                <h1 className="text-4xl font-semibold ">
                  Discover Vention in action
                </h1>
                <p>
                  See firsthand what sets us apart — and how our approach has
                  translated into exponential growth for our clients worldwide.
                  Hit play to begin your journey with us.
                </p>
              </div>
            </div>

            <div className="content w-full py-12 px-8 border-t-[2px] border-solid border-slate-400">
              <iframe
                className="w-full h-screen"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lhNSDAFtWXI?si=ypS9o3X0i9SEhxgd"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div className="content border-t-[2px] border-solid border-slate-400 py-16 px-12">
              <h1 className="mt-12 text-4xl font-semibold">Partnerships</h1>
              <p className="mt-4 font-sans">
                Our network includes the world’s top tech leaders, ensuring that
                our developers always have access to cutting-edge technologies
                and products.
              </p>
            </div>

            <div className=" py-4 pt-10 content border-t-[2px] border-solid border-slate-400 items-center">
              {/* <div className="relative overflow-hidden h-24"> */}
              <Marquee className="h-[140px]  left-0 w-[100%] animate-marquee_1s_linear_infinite">
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/ey_eVyZsxY.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/dealcloud-2.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/paypal_RVc4KIP.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/grubhub_cPYd20X.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/Slice_black.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/coca_cola-2.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/Merkle_black.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/Slice_black.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/pwc_2uTD1Rv.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/ibm-2.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/Merkle_black.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/postman_new.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/salesforce_l0Nx3cG.svg"
                />
                <img
                  className="mr-10"
                  src="https://ventionteams.com/media/documents/uipath-partner-authorized-lockup-digital-rgb-white_1.svg"
                />
              </Marquee>
              {/* </div> */}
            </div>

            <div className="content px-8 py-6 border-t-[2px] border-solid border-slate-400">
              <AccordionUsage />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
