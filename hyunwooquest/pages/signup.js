import Link from "next/link"
import {useRouter} from "next/router"
import React, {useState} from "react"

function Notification(props){
    const {text} = props; 
    return (
        <div>
            <p style={{color:"red"}}>Error: {text}</p>
        </div>
    );
}

export default function Signup(){
    let user_info = [
        ["hyunwoo0228", "aaaaaaaa"],
        ["giwan05", "aaaaaaaa"],
        ["yeongjin", "aaaaaaaa"],
        ["psc02", "aaaaaaaa"],
        ["cnsastudent", "aaaaaaaa"]
    ]
    if(typeof window !== undefined){
        localStorage.setItem("user_list", JSON.stringify(user_info));
    }

    const router = useRouter();

    const [userid, setUserid] = useState("");
    const [userpw, setUserpw] = useState("");
    const [userpwcf, setUserpwcf] = useState("");
    const [note, setNote] = useState("");


    const onChange = (event) => {
        if(event.target.id === "userid"){
            setUserid(event.target.value);
        }
        if(event.target.id === "userpw"){
            setUserpw(event.target.value);
        }
        if(event.target.id === "userpwcf"){
            setUserpwcf(event.target.value);
        }
    };

    const onClick = () => {
        let msg = ["ID가 너무 짧습니다. (최소 5자)", 
            "패스워드가 너무 짧습니다. (최소 8자)",
            "패스워드가 일치하지 않습니다.",
            "해당 ID를 사용하는 계정이 이미 존재합니다."];
        console.log(userid, userpw, userpwcf);

        let [pass, why] = handleUser();
        if(pass){
            router.push("/success");
        }
        else{
            setNote(msg[why]);
        }
    }

    const handleUser = () => {
        // ID, 비밀번호 입력받은 내용을 바탕으로 회원 등록할 수 있는지 판단하는 놈
        // [수용 여부(bool), 거절 사유(number)] 반환

        // ID, 비밀번호 조건 충족시키는지 체크
        if(userid.length < 5){
            return [false, 0];
        }
        if(userpw.length < 8){
            return [false, 1];
        }
        if(userpw != userpwcf){
            return [false, 2];
        }

        // 기존 유저와 ID 겹치는지 체크
        let users = JSON.parse(localStorage.getItem("user_list"));

        for(let i = 0; i < users.length; i++){
            if(userid === users[i][0]){
                return [false, 3];
            }
        }

        return [true, -1];
    }

    return (
        <div>
            <h1>회원 가입</h1>
            <hr/>
            <div>
                <label for="userid">아이디</label>
                <input onChange={onChange} type="text" id="userid" placeholder="5자리 이상 입력"/>
            </div>
            <div>
                <label for="userpw">비밀번호</label>
                <input onChange={onChange} type="password" id="userpw" placeholder="8자리 이상 입력"/>   
            </div>
            <div>
                <label for="userpwcf">비밀번호 확인</label>
                <input onChange={onChange} type="password" id="userpwcf" />  
            </div>
            <hr/>
            {note === "" ? null : <Notification text={note}/>}
            <button onClick={onClick} id="submit">제출</button>
        </div>
    );
}