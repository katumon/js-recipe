
const memoContainer = document.getElementById("memo-container") 
const addButton = document.getElementById("add-button")


addButton.onclick = function(){
    const memoInput = document.getElementById("memo-input").value /*inputをvalueプロパティで受け取る*/
    let memo = document.createElement("div")
    memo.textContent = memoInput
    memoContainer.append(memo)
    console.log(memoContainer)
    }
