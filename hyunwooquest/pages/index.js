import React from "react"
import Link from "next/link"

export default function Home(){
    return (
        <div>
            <h1>Welcome to Beatustagram!</h1>

            <Link href="/signup">
                회원가입
            </Link>
        </div>
    );
}