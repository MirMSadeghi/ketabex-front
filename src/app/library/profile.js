import Image from "next/image"
import profilePic from "../../../public/profile.jpg"

export default function ProfileHeader(){

    const user = {
        name: "علی علیزاده",
        id: 3456
    };
    const imgUrl = "https://robohash.org/" + user.id +"?bgset=bg1"
    const imgsrc = "/profile.jpg"

    return (
        <div className="flex flex-column justify-content-center align-items-center gap-3">
            <img src={imgsrc} className="t-rounded-full mx-3 t-w-48 t-border-8 t-border-gray-300" ></img>
            <h1 className="t-text-3xl t-font-bold t-bg-gray-100 t-bg-opacity-80 t-px-3 t-p-2 t-rounded-lg">کتابخانه {user.name} </h1>
        </div>
    )
}