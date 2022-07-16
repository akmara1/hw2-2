const time = document.querySelector("span");

const button = document.querySelector("button")

let count = 0;

const countedTime = () => {
    
    setInterval(function countedTime ()  {
        count++;
        time.innerHTML = count;
    }, 1000)

}

button.addEventListener("click", countedTime)

