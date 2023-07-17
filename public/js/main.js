const display = document.querySelector(".reviews");

const getData = async () => {
	// this api is coming from the server side it's not coming from the client so the api key is secure
	const url = `/api`;
	const res = await fetch(url);
	const data = await res.json()
	console.log(data);
	return data;
}

const payload = async () => {
	const payload = await getData();
	console.log(payload);
	let dataSet = payload.reviews;
		console.log(payload);
		console.log(dataSet);
		initialRender(dataSet);
		clickThroughData(dataSet);
}

const initialRender = (dataSet) => {
	let element = dataSet[0];
	let link = element.url;
	display.innerHTML = `
	<div class = "container"> 
		<p>Rating out of five: ${element.rating}</p>
		<p>${element.text}</p>
		<p><a href = "${link}" target="_blank">Read Full Review </a></p>
		<p>${element.user.name}</p>
	</div> `
}

const clickThroughData = async (dataSet) => {

	let btn = document.querySelector(".clickBtn");
	
	let counter = 1;

	btn.addEventListener("click", () => {
	
	  	let element = dataSet[counter];
		let link = element.url;
		display.innerHTML = `
			<div class = "container"> 
				<p>Rating out of five: ${element.rating}</p>
				<p>${element.text}</p>
				<p><a href = "${link}" target="_blank">Read Full Review </a></p>
				<p>${element.user.name}</p>
			</div> `
		
			counter = (counter + 1) % dataSet.length;
	});

}
payload();