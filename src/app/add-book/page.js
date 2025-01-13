'use client';

import { InputText } from 'primereact/inputtext';
import CitySelector from '../cityselector';
import React, { useState, useEffect, useRef } from "react";
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { FileUpload } from 'primereact/fileupload';

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';

import { genres, conditions } from '../enums'
        


export default function AddBook() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null); 
    const [condition, setCondition] = useState(null);
    const [genre, setGenre] = useState(null);
    const toast = useRef(null);
    
    // Debounce function
    const useDebounce = (value, delay) => {
        const [debouncedValue, setDebouncedValue] = useState(value);
    
        useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
        }, [value, delay]);
    
        return debouncedValue;
    };
    
    const debouncedQuery = useDebounce(query, 300);
    
    useEffect(() => {
        if (!debouncedQuery) {
        setResults([]);
        return;
        }
    
        const fetchResults = async () => {
        setLoading(true);
        try {
            const response = await fetch(
            `https://api.fidibo.com/flex/search/result?query=${debouncedQuery}`
            );
            const data = await response.json();
            const items = data?.data?.result?.[0]?.items || [];
            setResults(items.slice(0, 5)); 
        } catch {
            setResults([]);
        } finally {
            setLoading(false);
        }
        };
    
        fetchResults();
    }, [debouncedQuery]);
    
    const onUpload = () => {
        // toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const handleSelectBook = async (bookId) => {
        setResults([])
        setQuery('')
        try {
            const response = await fetch(
            `https://api.fidibo.com/flex/book/item/${bookId}`
            );
            const data = await response.json();
            setSelectedBook(data?.data?.result?.[0])
        } catch {
        }
    }

    const clearResult = () => {
        if (selectedBook) { 
            setSelectedBook(null)
            toast.current.show({ severity: 'info', summary: 'Info', detail: 'اطلاعات کتاب حذف شد.' });
        }
    }

    const addBook = async () => {

        if (selectedBook) {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: selectedBook.title,
                        author: selectedBook.author,
                        genre: genre,
                        condition: condition,

                    }),
                });
        
                if (response.ok) {
                    toast.current.show({ severity: 'success', summary: 'success', detail: 'کتاب به کتاخانه شما اضافه شد.' });
                    setSelectedBook(null)
                } else {
                    toast.current.show({ severity: 'error', summary: 'error', detail: 'مشکلی پیش آمد. لطفا اطلاعات کتاب را بررسی کنید.' });
                }
            } catch (error) {
                console.error("Error posting book data:", error);
            }
        }
    }

    return (
        <div>
             <Toast ref={toast} />
            <img className='col-12 sm:col-12 lg:col-8 mx-auto t-rounded-b-2xl' src="/addbook.jpg" />
        <div className='col-12 sm:col-10 lg:col-6 mx-auto marginm'>
            <IconField iconPosition="left">
                <InputIcon className="ml-4 pi pi-search"> </InputIcon>
                <InputText type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="t-w-full p-inputtext-lg t-rounded-full t-border-4 p-3 px-4" placeholder="کتاب مد نظرتان را جستجو کنید." />
            </IconField>
            <div className='t-px-3'>
                <ul className='t-w-full t-border t-rounded-md mt-3 t-px-1'>
                    {results.map((book, index) => (
                        <li key={index}>
                            <div className={`flex gap-3 p-2 align-items-center ${index > 0 ? "border-top-1" : ""} surface-border justify-content-between`} key={index}>
                                <img className="t-h-20 shadow-2 border-round" src={book.cover?.image} />
                                <h3 className="text-md text-900" dangerouslySetInnerHTML={{ __html: book.title }}></h3>
                                <Button className='t-bg-blue-500 t-rounded-lg t-text-white t-p-2 t-px-3' onClick={() => handleSelectBook(book.id)}>انتخاب</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedBook && (
                <div className='flex justify-content-between align-items-strech gap-4 m-3 mt-4' legend="اطلاعات کتاب">
                    <div className='t-my-auto'>
                        <img className='t-rounded-lg t-w-full t-h-fit' src={selectedBook?.cover?.image}/>
                    </div>
                    <div className='flex flex-column justify-content-between gap-3 py-2 t-w-full'>
                        <div className='flex justify-content-end align-items-center gap-2'>
                            <span className='t-font-semibold'>عنوان: </span>
                            <InputText type="text" value={selectedBook?.title} className="t-border-b-2 t-border-gray-400 t-p-1 t-px-2 t-rounded-none" placeholder="عنوان کتاب" />
                        </div>
                        <div className='flex justify-content-end align-items-center gap-2'>
                            <span className='t-font-semibold'>نویسنده: </span>
                            <InputText type="text" value={selectedBook?.authors?.[0].full_name} className="t-border-b-2 t-border-gray-400 t-p-1 t-px-2 t-rounded-none" placeholder="نام مترجم" />
                        </div>
                        <div className='flex justify-content-end align-items-center gap-2'>
                            <span className='t-font-semibold'>ناشر: </span>
                            <InputText type="text" value={selectedBook?.publishers?.[0]?.name} className="t-border-b-2 t-border-gray-400 t-p-1 t-px-2 t-rounded-none" placeholder="ناشر" />
                        </div>
                        <div className='flex justify-content-end align-items-center gap-2'>
                            <span className='t-font-semibold'>مترجم: </span>
                            <InputText type="text" value={selectedBook?.tanslators?.[0]?.full_name} className="t-border-b-2 t-border-gray-400 t-p-1 t-px-2 t-rounded-none" placeholder="مترجم" />
                        </div>
                    </div>
                </div>
            )}
            <div className='flex justify-content-between t-flex-wrap align-items-center gap-5 t-p-3'>
                <Dropdown className='p-component t-border t-rounded-md' value={condition} onChange={(e) => setCondition(e.value)} options={conditions} optionLabel="name" placeholder="وضعیت فیزیکی" />
                <Dropdown className='p-component t-border t-rounded-md' value={genre} onChange={(e) => setGenre(e.value)} options={genres} optionLabel="name" placeholder="دسته بندی" />
                <div className='flex justify-content-end align-items-center gap-2 t-flex-1'>
                    <Button onClick={() => clearResult()} className='t-bg-gray-200 t-p-3 t-px-4 t-text-gray-800 t-rounded-md'><i className='pi pi-times-circle'></i></Button>
                    <Button onClick={addBook} className='t-bg-green-600 t-p-2 t-px-5 t-font-medium t-text-white t-rounded-md'>ثبت</Button>
                    {/* <CitySelector/> */}
                    {/* <InputText type="text" className="t-w-36 t-border t-rounded-md t-p-2" placeholder="منطقه" /> */}
                </div>
            </div>
        </div>
        </div>
    )
}