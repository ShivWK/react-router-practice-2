import { requireAuth } from "../util";

export async function nestedLoader({ request }) {
    let pathName = new URL(request.url).pathname;
    await requireAuth(pathName);
    return null
}

export default function NestedProtected() {
    return (
        <h1>Nested Protected Component</h1>
    )
}