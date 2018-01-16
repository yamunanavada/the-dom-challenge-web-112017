document.addEventListener('DOMContentLoaded', function() {
  let counter = document.getElementById("counter")
  let plusOne = counter.innerText
  let isRunning = true;
   let timer = setInterval(function() {
      counter.innerText = `${plusOne++}`
  }, 1000)

  let pauseButton =document.getElementById("pause");
  function handlePauseClick(event) {
    if (event.target.id === "pause" && isRunning) {
         clearInterval(timer)
         isRunning = false;
         pauseButton.innerHTML = 'resume'
      } else if (event.target.id === "pause" && !isRunning) {
        timer = setInterval(function() {
           counter.innerText = `${plusOne++}`
       }, 1000);
        isRunning = true;
        pauseButton.innerHTML = 'pause'

      }
    }

  pauseButton.addEventListener("click", handlePauseClick)


  let plus = document.getElementById("+");
  function handleIncrementTimer(event){
    if (event.target.id === "+"){
      counter.innerText = `${plusOne++}`
    }
  }

  plus.addEventListener("click", handleIncrementTimer)


  let minus = document.getElementById("-");
  function handleDecrementTimer(event){
    if (event.target.id === "-"){
      counter.innerText = `${plusOne--}`
    }
  }

  minus.addEventListener("click", handleDecrementTimer)


  let heart = document.getElementById("<3");
  function handleHeart(event){
    const likeLi = document.createElement("li")
    const likeUl = document.querySelector(".likes")

    if (event.target.id === "<3"){
      likeLi.innerText = `${plusOne} was liked.`
      likeUl.append(likeLi)
    }
  }

  heart.addEventListener("click", handleHeart)




//Add Comments to the Page
  const form = document.getElementById("comment-form")
  const input = document.getElementById("input")
  const listDiv = document.querySelector(".comments")

  function handleFormSubmit(event) {
    event.preventDefault()

    const value = input.value

    const newP = document.createElement("p")
    newP.innerText = `${value}`

    listDiv.append(newP)

    input.value = ''
  }

  form.addEventListener("submit", handleFormSubmit)
})
