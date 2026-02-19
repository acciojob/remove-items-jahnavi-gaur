//your JS code here. If required.
let select = document.querySelector('#colorSelect')
let btn = document.querySelector('input')
let options = document.querySelectorAll('option')

btn.addEventListener('click',()=>{
	let currColor = select.value
	removeItem(currColor)
})

function removeItem(curColor){
	options.forEach((op)=>{
		if(op.textContent == curColor){
			select.removeChild(op)
		}
	})
}