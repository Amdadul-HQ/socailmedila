import Image from 'next/image';
import React from 'react';


const Navbar = () => {
    return (
        <nav className='max-w-screen-xl px-5 mx-auto py-7 flex justify-between items-center'>
            <div>
                <Image
                src='/assets/Logo.png'
                width={155}
                height={30}
                alt='logo'
                />
            </div>
            <div className='flex items-center gap-x-4'>
                <Image
                src='/assets/Search.png'
                width={40}
                height={40}
                alt=''
                />
                <Image
                src='/assets/Create.png'
                width={40}
                height={40}
                alt=''
                />
                <Image
                src='/assets/Message.png'
                width={40}
                height={40}
                alt=''
                />
                <Image
                src='/assets/Notification.png'
                width={40}
                height={40}
                alt=''
                />
                <Image
                src='/assets/Options.png'
                width={40}
                height={40}
                alt=''
                />
                <Image
                src='/assets/Profile Pic.png'
                width={40}
                height={40}
                alt=''
                />
            </div>
        </nav>
    );
};

export default Navbar;