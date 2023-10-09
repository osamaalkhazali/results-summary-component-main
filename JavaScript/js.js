let summaryScores = document.querySelector(".summaryScores")
let resultText = document.querySelector("#result")
let summaryArray = new Array()
let result = 0
async function summary() {
  const response = await fetch('../data.json')
  const data = await response.json()
  summaryArray = data
  
  let summaryData = () => {
    summaryScores.innerHTML = ''
    result = 0
      for (let i = 0; i < summaryArray.length; i++) {
        result += summaryArray[i].score ;
        let score = document.createElement("div")
        score.className = "score"
        score.classList.add(summaryArray[i].category.toLowerCase())
        score.innerHTML = 
        `
        <div class="scoreName">
        <img src="${summaryArray[i].icon}" alt="">
        <p>${summaryArray[i].category}</p>
        </div>
        <p>${summaryArray[i].score} <span>/ 100</span></p>
        `
        summaryScores.appendChild(score)
        }
        
  // Calculate Result
        result = Math.floor(result / 4 )
        resultText.textContent = result
        }
        
  summaryData()
  
  // Change Scores
  
  let continueButton = document.querySelector(".continueButton")
  let randomNumber 
  continueButton.addEventListener("click", () => {
    for (let i = 0; i < summaryArray.length; i++) {
      randomNumber = Math.floor(Math.random() * 100)
      summaryArray[i].score = randomNumber
    }
    summaryData()
  })
}
summary()

