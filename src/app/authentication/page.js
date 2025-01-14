'use client';

import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';

export default function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const toast = useRef(null);

    const handleLogin = async () => {
        if (email && password) {
            try {
                const response = await fetch('/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token);
                    toast.current.show({ severity: 'success', summary: 'موفق', detail: 'ورود موفقیت‌آمیز بود!' });
                    window.location.href = 'firstpage-->>directo this';
                } else {
                    toast.current.show({ severity: 'error', summary: 'خطا', detail: 'کاربری با این اطلاعات یافت نشد.' });
                }
            } catch (error) {
                toast.current.show({ severity: 'error', summary: 'خطا', detail: 'مشکلی پیش آمد. لطفاً دوباره تلاش کنید.' });
            }
        } else {
            toast.current.show({ severity: 'error', summary: 'خطا', detail: 'لطفاً تمام فیلدها را پر کنید.' });
        }
    };

    const handleSignUp = async () => {
        if (email && password && name && phone && address) {
            try {
                const response = await fetch('/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password, name, phone, address }),
                });

                if (response.ok) {
                    toast.current.show({ severity: 'success', summary: 'موفق', detail: 'ثبت‌نام موفقیت‌آمیز بود. در حال دریافت توکن...' });
                    
                    // پس از ثبت‌نام، بلافاصله ورود می‌کند
                    const loginResponse = await fetch('/token', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (loginResponse.ok) {
                        const data = await loginResponse.json();
                        localStorage.setItem('token', data.token);
                        toast.current.show({ severity: 'success', summary: 'موفق', detail: 'در حال هدایت به صفحه اصلی...' });
                        window.location.href = 'firstpage-->>directo this';
                    } else {
                        toast.current.show({ severity: 'error', summary: 'خطا', detail: 'خطا در دریافت توکن.' });
                    }
                } else {
                    toast.current.show({ severity: 'error', summary: 'خطا', detail: 'ثبت‌نام ناموفق بود. لطفاً دوباره تلاش کنید.' });
                }
            } catch (error) {
                toast.current.show({ severity: 'error', summary: 'خطا', detail: 'مشکلی پیش آمد. لطفاً دوباره تلاش کنید.' });
            }
        } else {
            toast.current.show({ severity: 'error', summary: 'خطا', detail: 'لطفاً تمام فیلدها را پر کنید.' });
        }
    };

    return (
        <div className="auth-container flex justify-content-center align-items-center min-h-screen bg-gray-100">
            <Toast ref={toast} />
            <Card 
                className="p-fluid w-11 sm:w-8 md:w-6 lg:w-4" 
                header={<img src="/auth-image.jpg" alt="" className="w-full" />}
                style={{ backgroundColor: '#707070' }}
            >
                <h2 
                    className="text-center text-2xl font-bold mb-4" 
                    style={{ fontSize: '1.5rem', border: '#707070', padding: '8px', borderRadius: '8px'  }}
                >
                    {isLogin ? 'ورود' : 'ثبت‌نام'}
                </h2>
                <div className="flex flex-column gap-4">
                    <InputText 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="ایمیل" 
                        className="w-full p-inputtext-lg p-3" 
                        style={{ border: '2px solid #5c5b5b', borderRadius: '8px' }}
                    />
                    <InputText 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="رمز عبور" 
                        className="w-full p-inputtext-lg p-3" 
                        style={{ border: '2px solid #5c5b5b', borderRadius: '8px' }}
                    />
                    {!isLogin && (
                        <>
                            <InputText 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="نام" 
                                className="w-full p-inputtext-lg p-3" 
                                style={{ border: '2px solid #5c5b5b', borderRadius: '8px' }}
                            />
                            <InputText 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                placeholder="شماره تلفن" 
                                className="w-full p-inputtext-lg p-3" 
                                style={{ border: '2px solid #5c5b5b', borderRadius: '8px' }}
                            />
                            <InputText 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                                placeholder="آدرس" 
                                className="w-full p-inputtext-lg p-3" 
                                style={{ border: '2px solid #5c5b5b', borderRadius: '8px' }}
                            />
                        </>
                    )}
                    <Button 
                        label={isLogin ? 'ورود' : 'ثبت‌نام'} 
                        className="w-full p-3 bg-green-600 text-white" 
                        onClick={isLogin ? handleLogin : handleSignUp} 
                        style={{ border: '2px solid #707070', borderRadius: '8px' }}
                    />
                    <Divider />
                    <Button 
                        label={isLogin ? 'ایجاد حساب کاربری' : 'قبلاً حساب کاربری دارید؟'} 
                        className="w-full p-3 bg-blue-500 text-white" 
                        onClick={() => setIsLogin(!isLogin)} 
                        style={{ border: '2px solid #707070', borderRadius: '8px' }}
                    />
                </div>
            </Card>
        </div>
    );
}
