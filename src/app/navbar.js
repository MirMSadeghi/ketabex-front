'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
        

const Navbar = () => {
    const router = useRouter();

    const items = [
        {
            label: 'کتاب‌ها',
            icon: 'pi pi-home ml-2',
            command: () => router.push('/')
        },
        {
            label: 'کتابخانه‌ من',
            icon: 'pi pi-book ml-2',
            command: () => router.push('/library')
        },
        {
            label: 'درخواست‌ها',
            icon: 'pi pi-send ml-2',
            command: () => router.push('/requests')
        },
        {
            label: 'افزودن کتاب',
            icon: 'pi pi-plus-circle ml-2',
            command: () => router.push('/add')
        },
    ];

    return (
        <div className='flex justify-content-between'>
            <Menubar className='t-bg-white mx-3' model={items}/>
            <div className='flex justify-content-end align-items-center'>
                <Button className='flex align-items-center mx-4 t-border-gray-300 t-bg-gray-100 t-border-2 t-rounded-full pr-3 my-2'>
                    <span>علی علیزاده</span>
                    <Avatar className='t-mr-2' image="/profile.jpg" shape='circle' size="large"></Avatar>
                </Button>
            </div>
        </div>
    )
};

export default Navbar;