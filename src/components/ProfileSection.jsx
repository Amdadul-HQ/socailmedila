import Image from 'next/image';
import React from 'react';

const ProfileSection = () => {
    return (
        <div className="flex w-5/12 h-[200px] absolute -bottom-[30%] left-[15%] items-center justify-between">
            <div>
              <Image
                src="/assets/Profile Pic.png"
                width={200}
                height={200}
                alt="Profile Pic"
              />
            </div>
            <div className="mt-24">
              <h1 className="text-2xl text-[#2B2B2B] font-semibold">
                John Doe <sup>.</sup>
                <span className="ml-3 text-[#76A4CE] font-light text-base">
                  @johndoe
                </span>
              </h1>
              <p className="text-sm text-[#1B1C1E] font-normal">
                Astrophotographer 🌌
                <br />
                Gamer 👾
              </p>
            </div>
            <div className="mt-24">
              <button className="text-white bg-[#196AA0] py-2 px-4 rounded-full ml-12 text-sm font-medium">
                Follow
              </button>
            </div>
          </div>
    );
};

export default ProfileSection;