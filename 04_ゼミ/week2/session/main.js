
const memoContainer = document.getElementById("memo-container") /*inputをvalueプロパティで受け取る*/
const addButton = document.getElementById("add-button")
 /*class名を引数にしている！*/

addButton.onclick = function(){
    const memoInput = document.getElementById("memo-input").value
    let memo = document.createElement("div")
    memo.textContent = memoInput
    memoContainer.append(memo)
    console.log(memoContainer)
    }