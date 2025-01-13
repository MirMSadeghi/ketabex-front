
export default function Statistics() {

    return (
        <div className="grid mx-4 t-mb-3">
            <div className="col-6 md:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 t-rounded-lg">
                    <div className="flex flex-column justify-content-between align-items-center">
                        <i className="pi pi-calendar text-blue-500 text-xl bg-blue-100 border-round p-2 mb-2"></i>
                        <span className="block text-500 font-medium t-mb-2">عضو پلتفرم از</span>
                        <div className="text-900 font-medium text-lg">بهمن ۱۴۰۳</div>
                    </div>
                </div>
            </div>
            <div className="col-6 md:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 t-rounded-lg">
                    <div className="flex flex-column justify-content-between align-items-center">
                        <i className="pi pi-link text-blue-500 text-xl bg-blue-100 border-round p-2 mb-2"></i>
                        <span className="block text-500 font-medium t-mb-2">کتاب های تبادل شده</span>
                        <div className="text-900 font-medium text-lg">۶ عدد</div>
                    </div>
                </div>
            </div>
            <div className="col-6 md:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 t-rounded-lg">
                    <div className="flex flex-column justify-content-between align-items-center">
                        <i className="pi pi-book text-blue-500 text-xl bg-blue-100 border-round p-2 mb-2"></i>
                        <span className="block text-500 font-medium t-mb-2">کتاب های موجود</span>
                        <div className="text-900 font-medium text-lg">۲۲ عدد</div>
                    </div>
                </div>
            </div>
            <div className="col-6 md:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 t-rounded-lg">
                    <div className="flex flex-column justify-content-between align-items-center">
                        <i className="pi pi-map-marker text-blue-500 text-xl bg-blue-100 border-round p-2 mb-2"></i>
                        <span className="block text-500 font-medium t-mb-2">محل سکونت</span>
                        <div className="text-900 font-medium text-lg">تهران</div>
                    </div>
                </div>
            </div>
        </div>
    )
}