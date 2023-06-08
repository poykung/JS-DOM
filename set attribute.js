//set attribute

const title = document.getElementById('title');
const content = document.querySelector('.content');
const allel = document.querySelectorAll('p');
const light = document.querySelector('.light');


function displaydark (){
    light.setAttribute('class','dark') //เปลี่ยนค่าใน element ให้เป็นค่าใหม่ และทำงานร่วมกับ css เพื่อใช้เปลี่ยน style
}
function displaylight(){
    light.setAttribute('class','light')
}

