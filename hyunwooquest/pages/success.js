import React from "react"
import Link from "next/link"

export default function Success(){
    return (
        <div>
            <h1>회원가입 성공!</h1>

            <Link href="/">
                홈
            </Link>
        </div>
    );
}