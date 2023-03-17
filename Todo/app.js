/*function infalert(){
    alert("Not Infinite Alert!!!!!!")
}

function changeText(event, text){
    event.target.innerText = text
}

const element = document.getElementById("title")

//element.addEventListener("mouseover", infalert)
element.addEventListener("mouseleave",
(event) => changeText(event, "Python is Fun"))

element.addEventListener("mouseenter",
    (event) => changeText(event, "asdf"))*/

/*function checkWindowSize(){
    w = window.outerWidth
    element = document.getElementById("title")

    element.className = "title1"

    if(w == 800){
        element.innerText = "어케했노"
    }
    else if(w < 700){
        element.innerText = '창 크기가 너무 작습니다.'
        element.className = "title2"
    }
    else if(w >= 700 && w <= 1000){
        element.innerText = '창 크기가 적당합니다.'
    }
    else if(w > 1000){
        element.innerText = '창 크기가 너무 큽니다.'
        element.className = "title2"
    }
}

function getRandomColor(){
    let k = ""
    for(let i = 0; i < 6; i++){
        rand = Math.floor(Math.random()*16)
        if(rand >= 10){
            k += String.fromCharCode(rand - 10 + 65)
        }
        else{
            k += String.fromCharCode(rand + 48)
        }
    }

    return "#" + k
}

function changeBackgroundColor(){
    element = document
    color = element.body.style.backgroundColor


    element.body.style.backgroundColor = getRandomColor()
}

function changeColor(event){
    element = event.target
    element.style.color = getRandomColor()
}

function changeColor(event){
    element = event.target
    element.style.color = getRandomColor()
}*/

function getDeleteButton(index){ 
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "삭제"
    deleteButton.className = index.toString()
    deleteButton.addEventListener("click", (event) => removeTodo(event))

    return deleteButton
}

function removeTodo(event){
    let todo_list = JSON.parse(localStorage.getItem("todo_list"))


    let e = event.target
    let num = parseInt(e.className)
    let remove_target = loc.childNodes[num]
    loc.removeChild(remove_target)
    
    todo_list.splice(num, 1)
    localStorage.setItem("todo_list", JSON.stringify(todo_list))
}

function addTodo(){
    //지금까지 저장소에 남아있던 아이템 가져오기
    let todo_list = JSON.parse(localStorage.getItem("todo_list"))
    let todo_len = todo_list.length
    
    let div = document.createElement("li")
    let todo = prompt("할 일을 추가하세요:")

    if(todo != null && todo != ""){
        div.innerText = todo

        div.appendChild(getDeleteButton(todo_len))

        loc.appendChild(div)

        todo_list.push(todo)
        localStorage.setItem("todo_list", JSON.stringify(todo_list))
    }
    else return
}

function loadTodo(){
    let todo_list = JSON.parse(localStorage.getItem("todo_list"))
    try{ // 로컬 스토리지에서 할일 리스트 불러오기
        for(let i = 0; i < todo_list.length; i++){
            let div = document.createElement("li")
            let todo = todo_list[i]

            div.innerText = todo
            div.appendChild(getDeleteButton(i))

            loc.appendChild(div)
        }
    }
    catch{ // 로컬 스토리지에 아무것도 없는 경우
        // 빈 리스트 저장
        localStorage.setItem("todo_list", JSON.stringify([]))
    }
}

const descElement = document.getElementById("description")


const loc = document.getElementById("list")
const buttonElement = document.getElementById("todo-add")
buttonElement.addEventListener("click", addTodo)

loadTodo()

//const titleElement = document.getElementById("title")
//window.addEventListener('resize', checkWindowSize)

