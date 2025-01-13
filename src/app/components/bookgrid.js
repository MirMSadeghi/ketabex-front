'use client'

import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { genres, conditions } from '../enums'
import { ConfirmDialog } from 'primereact/confirmdialog'; 
import { confirmDialog } from 'primereact/confirmdialog'; 
import { Toast } from 'primereact/toast';

export default function BookGrid({ data, layout = 'grid' }){

    const toast = useRef(null);

    const confirmExchange = (bookId) => {
        confirmDialog({
            message: 'از درخواست خود اطمینان دارید؟',
            header: 'تایید درخواست',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept: () => accept(bookId),
        });
    };

    const accept = async (bookId) => {

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/requests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    book: bookId,
                }),
            });
    
            if (response.ok) {
                toast.current.show({ severity: 'success', summary: 'درخواست ثبت شد.', detail: 'از طریق پنل درخواست‌ها، پیگیری کنید.' });
            } else {
                toast.current.show({ severity: 'error', summary: 'آخ!', detail: 'مشکلی پیش آمد، لطفا دوباره تلاش کنید.' });
            }
        } catch (error) {
            console.error("Error posting request:", error);
        }
    }

    const gridItem = (book) => {
        return (
            <div className="col-12 sm:col-6 md:col-6 lg:col-3 p-2" key={book.id}>
                <div className="p-4 t-h-full flex flex-column border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <Tag value={book.condition} severity={conditions.find(obj => obj.code === book.condition)?.severity}></Tag>
                        <div className="flex align-items-center gap-2">
                            <span className="font">{book.location}</span>
                            <i className="pi pi-map-marker"></i>
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src='./pic.jpg' alt={book.name}  />
                        <div className="text-2xl font-bold">{book.title}</div>
                        <div className='flex flex-column justify-content-center align-items-center'>
                            <div className="text-xl p-2">{book.author} </div>
                            <div className="font-light font-sm">مترجم: {book.translator}</div>
                        </div>
                    </div>
                    {/* TODO: Add condition to remove button if its users book */}
                    <Button onClick={() => confirmExchange(book.id)} className="t-mt-auto w-full p-button p-2 flex justify-content-center t-bg-blue-600 t-text-white"><i className='pi pi-link pl-2'></i> درخواست مبادله  </Button>
                </div>
            </div>
        );
    };

    const gridTemplate = (books) => {
        return <div className="grid grid-nogutter">{books.map((book) => gridItem(book))}</div>;
    };

    // const header = () => {
    //     return (
    //         <div className="flex justify-content-end">
    //             <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
    //         </div>
    //     );
    // };

    return (
        <div className="card">
             <Toast ref={toast} />
             <ConfirmDialog />
            <DataView value={data} listTemplate={gridTemplate(data)} layout='grid' />
        </div>
    )
}