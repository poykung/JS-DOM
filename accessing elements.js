//DOM Document
// เปลี่ยนเนื้อหา HTML : element.innerHTML
// เปลี่ยนเนื้อหา Text : element.innerText
// เปลี่ยน style Element : element.styleproperties = value

// อ้างอิงการเข้าถึง element ด้วยชื่อ tag ในกรณี tag มีจำนวนมากจะเข้าถึงตัว tag ตำแหน่งแรกสุดก่อน
// ต้องใช้ .querySelectorAll ตามด้วยชื่อ tag
//const pee = document.getElementsByTagName('p');

// อ้างอิงการเข้าถึง element ด้วยชื่อ id
let getID = document.getElementById('demo');

//อ้างอิงการเข้าถึง element ด้วย class
//let getClass = document.querySelector('.mycss');


function displaytext(){ //สร้าง function
    getID.innerText =  "<b>JS BASIC</b>"; //เปลี่ยนแปลงข้อความ สามารถแทรกคำสั่ง html มาร่วมได้โดยใช้ innerHTML 
} 

