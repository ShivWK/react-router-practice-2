import { redirect } from "react-router-dom"

export async function requireAuth(pathName) {
    const isLoggedIn = localStorage.getItem("loggedin")
    
    if (!isLoggedIn) {
        throw redirect("/login?redirectTo="+pathName);
    }
}