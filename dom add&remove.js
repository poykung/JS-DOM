//DOM CSS ADD&REMOVE CLASS

const box = document.getElementById('box');

function darkmode(){
    box.classList.add("dark") //add เพิ่ม class
}

function remove(){
    box.classList.remove("dark") //remove ลบ class
}

function SwitchToggle(){
    box.classList.toggle("dark") //toggle switch class
}