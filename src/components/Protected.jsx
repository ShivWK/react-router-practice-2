import React from "react"
import { redirect, Outlet } from "react-router-dom"
import { requireAuth } from "../util"

export async function loader({ request }) {
    let pathName = new URL(request.url).pathname;
    await requireAuth(pathName);
    return null
}

export default function Protected() {
    return <>
        <h1>Protected Component</h1>
        <Outlet />
    </>
}
