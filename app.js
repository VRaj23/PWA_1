window.addEventListener('load', e =>{
	showData();
	myServiceWorker();
});

function myServiceWorker(){
	if('serviceWorker' in navigator){
		try{
			navigator.serviceWorker.register('sw.js');
			console.log('serviceWorker registered');
		} catch(error){
				console.log('serviceWorker failed to register');
		}
	}
}

async function showData(){
	console.log('async function: showData');
	document.getElementById('main').innerHTML = data("Hello");
}

function data(input){
	console.log('function: data');
	return `
	<div>
	<p>${input}</p>
	</div>
	`;
}
