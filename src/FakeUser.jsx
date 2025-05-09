import { Icon } from "@iconify/react";
import { useState } from "react";

let _user = {
    name: "Ana Alface",
    username: "anaalface",
    email: "ana@ana.com",
    urlPhoto: "https://randomuser.me/api/portraits/med/women/56.jpg"
}

async function loadUser(setUser) {
    let resp = await fetch("https://randomuser.me/api/")
    let data = await resp.json()
    let fakeUser = data.results[0];

    let newUser = {
        name: fakeUser.name.first + " " + fakeUser.name.last,
        email: fakeUser.email,
        username: fakeUser.login.username,
        urlPhoto: fakeUser.picture.medium
    };

    console.log("Novo usuário:", newUser);
    setUser(newUser); 
}

export default function FakeUser() {
    const [user, setUser] = useState(_user);

    return (
        <>
            <div className="flex items-center bg-gray-200 w-140 m-1 rounded-lg" >
                <div className="flex items-center justify-between w-full p-1 pl-5 pr-5" >
                    <div className="flex items-center">
                        <img src={user.urlPhoto} alt={user.name} className="w-16 h-16 rounded-lg mr-3" />
                        <div className="">
                            <div className="text-lg font-semibold">{user.name}</div>
                            <div>@{user.username}</div>
                            <div>{user.email}</div>
                        </div>
                    </div>
                    <button
                    onClick={() => loadUser(setUser)}
                    className="flex items-center p-1 bg-gray-400 rounded text-black hover:bg-gray-500"
                    >
                    <Icon icon="mdi-refresh" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </>
    );
}
