import Album from "@/components/Album";
import ProfileSection from "@/components/ProfileSection";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <section>
      <div className="relative">
        <Image
          src="/assets/Profile Background.png"
          width={1920}
          height={400}
          alt=""
          className="mx-auto"
        />
          <ProfileSection/>
      </div>
      <div className="max-w-screen-xl px-9 mx-auto bg-[#F6F6F6]">
        <div className="flex justify-between gap-x-28 relative">
            <div className="mt-40 w-8/12">
                <div className="bg-[#F1F1F1] p-4 rounded-[10px]">
                <h1 className="text-[#2B2B2B] text-[28px] font-semibold">How Astrophotography changed my life</h1>
                </div>
            </div>
          <div className="w-1/2 flex justify-end">
            <Album/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
