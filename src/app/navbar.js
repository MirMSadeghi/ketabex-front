'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

const Navbar = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // بررسی وجود توکن در حافظه داخلی
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            const storedUserName = localStorage.getItem('userName');
            setUserName(storedUserName || 'کاربر');
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    // فقط "کتاب‌ها" و "ورود / ثبت‌نام" نمایش داده می‌شود زمانی که کاربر وارد نشده باشد
    const items = [
        {
            label: ' کتابخانه عمومی' ,
            icon: 'pi pi-home ml-2',
            command: () => router.push('/')
        },
    ];

    // این منوها فقط زمانی نمایش داده می‌شود که کاربر وارد شده باشد
    if (isAuthenticated) {
        items.push(
            {
                label: 'کتابخانه‌ من',
                icon: 'pi pi-book ml-2',
                command: () => router.push('/library')
            },
            {
                label: 'افزودن کتاب',
                icon: 'pi pi-plus-circle ml-2',
                command: () => router.push('/add')
            },
            {
                label: 'صفحه مبادلات',
                icon: 'pi pi-plus-circle ml-2',
                command: () => router.push('/requests')
            }
        );
    }

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        setIsAuthenticated(false);
        router.push('/authentication'); // هدایت به صفحه ورود
    };

    return (
        <div className='flex justify-content-between'>
            <Menubar className='t-bg-white mx-3' model={items} />
            <div className='flex justify-content-end align-items-center'>
                {isAuthenticated ? (
                    <Button label='خروج'  className='flex align-items-center mx-4 t-border-gray-300 t-bg-gray-100 t-border-2 t-rounded-full pr-3 my-2' onClick={handleSignOut}>
                        <span>{userName}</span>
                        <Avatar className='t-mr-2' image="/profile.jpg" shape='circle' size="large" />
                    </Button>
                ) : (
                    <Button 
                         className='t-bg-white mx-3 t-rounded-full border-2 border-gray-300 rounded-full p-2 px-3 hover:bg-gray-100 transition-all ease-in-out'

                        label="ورود / ثبت‌نام" 
                        onClick={() => router.push('/authentication')} 
                    />
                )}
            </div>
        </div>
    );
};

export default Navbar;
