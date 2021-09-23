import {
    Settings,
    Login,
    Notfound
}from "../views" //引入页面

//Login页面
export const mainRoute = [
    {
        pathname: "/login",
        component:Login
    },
    {
        pathname:"/404",
        component:Notfound
    }
]