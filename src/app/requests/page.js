'use client';

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './styles.css';  // وارد کردن فایل استایل

/////for fetching from api
/*
'use client';

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './styles/styles.css';  // وارد کردن فایل استایل

export default function TemplateDemo() {
    // State to hold fetched data
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);  // To handle loading state
    const [error, setError] = useState(null);  // To handle errors

    useEffect(() => {
        // Fetch data from API when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch('the api address'); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setRequests(data);  // Set the data to state
                setLoading(false);  // Set loading to false after data is fetched
            } catch (error) {
                setError(error.message);  // Set the error state if there is an error
                setLoading(false);  // Set loading to false after error
            }
        };

        fetchData();  // Call the fetchData function
    }, []);

    const handleAccept = (rowData) => {
        const updatedRequests = requests.map((request) =>
            request.id === rowData.id ? { ...request, status: 'تایید شده' } : request
        );
        setRequests(updatedRequests);
    };

    const handleReject = (rowData) => {
        const updatedRequests = requests.map((request) =>
            request.id === rowData.id ? { ...request, status: 'رد شده' } : request
        );
        setRequests(updatedRequests);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'تایید شده':
                return 'status-approved';
            case 'رد شده':
                return 'status-rejected';
            default:
                return 'status-pending';
        }
    };

    const actionBodyTemplate = (rowData) => {
        const isDisabled = rowData.status !== 'در حال تعلیق';
        return (
            <div className="flex gap-2 justify-content-center" style={{ flexDirection: 'row-reverse' }}>
                <Button
                    label="قبول"
                    icon="pi pi-check"
                    className="p-button-success"
                    onClick={() => handleAccept(rowData)}
                    disabled={isDisabled}
                />
                <Button
                    label="رد"
                    icon="pi pi-times"
                    className="p-button-danger"
                    onClick={() => handleReject(rowData)}
                    disabled={isDisabled}
                />
            </div>
        );
    };

    const columnTemplate = (value) => {
        return <div style={{ textAlign: 'right' }}>{value}</div>;
    };

    // If loading data or an error occurred
    if (loading) {
        return <div>در حال بارگذاری...</div>;
    }

    if (error) {
        return <div>خطا: {error}</div>;
    }

    return (
        <div className="card p-4">
            <DataTable
                value={requests}
                tableStyle={{ minWidth: '60rem' }}
                responsiveLayout="scroll"
                className="p-datatable-gridlines"
            >
                <Column field="username" header="نام کاربری" body={(rowData) => columnTemplate(rowData.username)} />
                <Column field="bookToTake" header="کتابی که باید بگیرید" body={(rowData) => columnTemplate(rowData.bookToTake)} />
                <Column field="bookForOthers" header="کتابی که باید بدهید" body={(rowData) => columnTemplate(rowData.bookForOthers)} />
                <Column field="status" header="وضعیت" body={(rowData) => <div className={`p-datatable-status ${getStatusClass(rowData.status)}`}>{rowData.status}</div>} />
                <Column header="عملیات" body={actionBodyTemplate} />
            </DataTable>
        </div>
    );
}
*/

/// for local representation we use predefined request
export default function TemplateDemo() {
    const [requests, setRequests] = useState([
        {
            id: 1,
            username: 'علی رضایی',
            bookToTake: 'کیمیاگر',
            bookForOthers: 'ملت عشق',
            status: 'در حال تعلیق',
        },
        {
            id: 2,
            username: 'زهرا احمدی',
            bookToTake: 'سمفونی مردگان',
            bookForOthers: 'چراغ‌ها را من خاموش می‌کنم',
            status: 'در حال تعلیق',
        },
        {
            id: 3,
            username: 'محمد حسینی',
            bookToTake: 'بوف کور',
            bookForOthers: 'مدیر مدرسه',
            status: 'در حال تعلیق',
        },
        {
            id: 4,
            username: 'مریم کاظمی',
            bookToTake: 'جز از کل',
            bookForOthers: 'شازده کوچولو',
            status: 'در حال تعلیق',
        },
    ]);

    const handleAccept = (rowData) => {
        const updatedRequests = requests.map((request) =>
            request.id === rowData.id ? { ...request, status: 'تایید شده' } : request
        );
        setRequests(updatedRequests);
    };

    const handleReject = (rowData) => {
        const updatedRequests = requests.map((request) =>
            request.id === rowData.id ? { ...request, status: 'رد شده' } : request
        );
        setRequests(updatedRequests);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'تایید شده':
                return 'status-approved';
            case 'رد شده':
                return 'status-rejected';
            default:
                return 'status-pending';
        }
    };

    const actionBodyTemplate = (rowData) => {
        const isDisabled = rowData.status !== 'در حال تعلیق';
        return (
            <div className="flex gap-2 justify-content-center" style={{ flexDirection: 'row-reverse' }}>
                <Button
                    label="قبول"
                    icon="pi pi-check"
                    className="p-button-success"
                    onClick={() => handleAccept(rowData)}
                    disabled={isDisabled}
                />
                <Button
                    label="رد"
                    icon="pi pi-times"
                    className="p-button-danger"
                    onClick={() => handleReject(rowData)}
                    disabled={isDisabled}
                />
            </div>
        );
    };

    const columnTemplate = (value) => {
        return <div style={{ textAlign: 'right' }}>{value}</div>;
    };

    return (
        <div className="card p-4">
            <DataTable
                value={requests}
                tableStyle={{ minWidth: '60rem' }}
                responsiveLayout="scroll"
                className="p-datatable-gridlines"
            >
                <Column field="username" header="نام کاربری" body={(rowData) => columnTemplate(rowData.username)} />
                <Column field="bookToTake" header="کتابی که باید بگیرید" body={(rowData) => columnTemplate(rowData.bookToTake)} />
                <Column field="bookForOthers" header="کتابی که باید بدهید" body={(rowData) => columnTemplate(rowData.bookForOthers)} />
                <Column field="status" header="وضعیت" body={(rowData) => <div className={`p-datatable-status ${getStatusClass(rowData.status)}`}>{rowData.status}</div>} />
                <Column header="عملیات" body={actionBodyTemplate} />
            </DataTable>
        </div>
    );
}
