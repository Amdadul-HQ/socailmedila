import Image from 'next/image';
import React from 'react';

const Album = () => {
    return (
        <div className="max-w-[400px]">
              <h3 className="text-2xl text-[#2B2B2B] font-semibold mb-2">
                Photos
              </h3>
              <div className="">
                <div className="flex justify-end">
                  <Image
                    src="/assets/Rectangle1.png"
                    width={200}
                    height={200}
                    alt=""
                  />
                  <Image
                    src="/assets/Rectangle2.png"
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="flex justify-end">
                  <Image
                    src="/assets/Rectangle3.png"
                    width={200}
                    height={200}
                    alt=""
                  />
                  <Image
                    src="/assets/Rectangle4.png"
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <p className="text-[#196AA0] text-base font-medium text-right mt-2">
                  More +
                </p>
              </div>
              <div className="max-w-[400px]">
                <h3 className="text-2xl text-[#2B2B2B] font-semibold mb-2">
                  Videos
                </h3>
                <div className="space-y-4">
                  <div className="relative">
                    <Image
                      src="/assets/video1.jpg"
                      width={400}
                      height={200}
                      alt=""
                      className="rounded-xl "
                    />
                    <div className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="52"
                        viewBox="0 0 72 52"
                        fill="none"
                      >
                        <g filter="url(#filter0_b_4_131)">
                          <rect
                            x="1"
                            y="1"
                            width="70"
                            height="50"
                            rx="10"
                            fill="#D0D0D0"
                            fill-opacity="0.2"
                          />
                          <rect
                            x="1"
                            y="1"
                            width="70"
                            height="50"
                            rx="10"
                            stroke="#F6F6F6"
                            stroke-opacity="0.6"
                          />
                        </g>
                        <path
                          d="M46 26L31 34.6603L31 17.3397L46 26Z"
                          fill="#F6F6F6"
                          fill-opacity="0.8"
                        />
                        <defs>
                          <filter
                            id="filter0_b_4_131"
                            x="-3.5"
                            y="-3.5"
                            width="79"
                            height="59"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="2"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_4_131"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_4_131"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/assets/video2.jpg"
                      width={400}
                      height={200}
                      alt=""
                      className="rounded-xl "
                    />
                    <div className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="52"
                        viewBox="0 0 72 52"
                        fill="none"
                      >
                        <g filter="url(#filter0_b_4_131)">
                          <rect
                            x="1"
                            y="1"
                            width="70"
                            height="50"
                            rx="10"
                            fill="#D0D0D0"
                            fill-opacity="0.2"
                          />
                          <rect
                            x="1"
                            y="1"
                            width="70"
                            height="50"
                            rx="10"
                            stroke="#F6F6F6"
                            stroke-opacity="0.6"
                          />
                        </g>
                        <path
                          d="M46 26L31 34.6603L31 17.3397L46 26Z"
                          fill="#F6F6F6"
                          fill-opacity="0.8"
                        />
                        <defs>
                          <filter
                            id="filter0_b_4_131"
                            x="-3.5"
                            y="-3.5"
                            width="79"
                            height="59"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="2"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_4_131"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_4_131"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/assets/video3.jpg"
                      width={400}
                      height={200}
                      alt=""
                      className="rounded-xl "
                    />
                    <div className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="52"
                        viewBox="0 0 72 52"
                        fill="none"
                      >
                        <g filter="url(#filter0_b_4_131)">
                          <rect
                            x="1"
                            y="1"
                            width="70"
                            height="50"
                            rx="10"
                            fill="#D0D0D0"
                            fill-opacity="0.2"
                          />
                          <rect
                            x="1"
                            y="1"
                            width="70"
                            height="50"
                            rx="10"
                            stroke="#F6F6F6"
                            stroke-opacity="0.6"
                          />
                        </g>
                        <path
                          d="M46 26L31 34.6603L31 17.3397L46 26Z"
                          fill="#F6F6F6"
                          fill-opacity="0.8"
                        />
                        <defs>
                          <filter
                            id="filter0_b_4_131"
                            x="-3.5"
                            y="-3.5"
                            width="79"
                            height="59"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="2"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_4_131"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_4_131"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/assets/video4.jpg"
                      width={400}
                      height={200}
                      alt=""
                      className="rounded-xl "
                    />
                    <div className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="52"
                        viewBox="0 0 72 52"
                        fill="none"
                      >
                        <g filter="url(#filter0_b_4_131)">
                          <rect
                            x="1"
                            y="1"
                            width="70"
                            height="50"
                            rx="10"
                            fill="#D0D0D0"
                            fill-opacity="0.2"
                          />
                          <rect
                            x="1"
                            y="1"
                            width="70"
                            height="50"
                            rx="10"
                            stroke="#F6F6F6"
                            stroke-opacity="0.6"
                          />
                        </g>
                        <path
                          d="M46 26L31 34.6603L31 17.3397L46 26Z"
                          fill="#F6F6F6"
                          fill-opacity="0.8"
                        />
                        <defs>
                          <filter
                            id="filter0_b_4_131"
                            x="-3.5"
                            y="-3.5"
                            width="79"
                            height="59"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="2"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_4_131"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_4_131"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#196AA0] text-base font-medium text-right mt-2">
                  More +
                </p>
                </div>
              </div>
            </div>
    );
};

export default Album;