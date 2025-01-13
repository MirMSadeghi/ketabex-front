'use client'

import React, { useState } from 'react';
import { CascadeSelect } from 'primereact/cascadeselect';

export default function CitySelector() {

    const [selectedCity, setSelectedCity] = useState(null);

    const cities = [
        {cname: 'تهران', code: 'thr'},
        {cname: 'شیراز', code: 'shr'},
        {cname: 'تبریز', code: 'tbr'},
        {cname: 'رشت', code: 'rst'},
        {cname: 'اصفهان', code: 'esf'},
        {cname: 'مشهد', code: 'mas'},
    ]

    return (

        <CascadeSelect value={selectedCity} onChange={e => setSelectedCity(e.value)} options={cities} 
            optionLabel="cname" optionGroupLabel="name" optionGroupChildren={cities}
            className="flex align-items-center t-border t-rounded-md t-h-fit t-w-36" placeholder="انتخاب شهر" />
    )
}