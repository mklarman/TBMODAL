var mod = document.getElementById('modal')
var button = document.getElementById('button')
setTimeout(delay, 3000)

function delay(){
	mod.style.display = 'block'
}

function close(){
	mod.style.display = 'none'
}
button.addEventListener('click', close)