class DOM {
    magic = document.querySelector('.magic');
    task = document.querySelector('.task');
    taskContainer = document.querySelector('.task-container');

}

let dom = new DOM();    
async function apiCall(url) {
    try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        domUpdate(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }


}

function domUpdate(obj) {
    dom.task.textContent = obj.activity
}

function listen() {
    dom.magic.addEventListener('click' , function(e) {
        dom.magic.classList.add("click")
        dom.taskContainer.classList.add("active");
        apiCall("http://www.boredapi.com/api/activity/");
    })
}

listen()