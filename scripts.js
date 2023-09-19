const inputs= document.querySelectorAll('[data-key="number"]');
const addButton =document.querySelector('[data-key="add"]')
const result= document.querySelector('[data-key="result"]')  
console.log(result)
const equalTo = document.querySelector(' [data-key="equal_to"]')
console.log(equalTo)
const handleAdd =()=>{

const add = inputs +inputs
return result.innerHTML=add
}
addButton.addEventListener("click",console.log("okay"))

inputs.forEach(input => {
    input.addEventListener("click", () => {
        console.log("hi");
    });
});