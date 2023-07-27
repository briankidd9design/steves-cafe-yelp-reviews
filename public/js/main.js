const display = document.querySelector(".reviews");

const getData = async () => {
	// this api is coming from the server side it's not coming from the client so the api key is secure
	const url = `/api`;
	const res = await fetch(url);
	const data = await res.json()
	// console.log(data);
	return data;
}

const payload = async () => {
	const payload = await getData();
	let dataSet = payload.reviews;
		initialRender(dataSet);
		clickThroughData(dataSet);
}

const initialRender = (dataSet) => {
	let element = dataSet[0];
	// destructuring for element
	let {rating, text, user} = element;
	let link = element.url;
	display.innerHTML = `
	<div class = "container"> 
		<p>Rating out of five: ${rating}</p>
		<p>${text}</p>
		<p><a href = "${link}" target="_blank">Read Full Review </a></p>
		<p>${user.name}</p>
	</div> `
}

const clickThroughData = async (dataSet) => {

	let btn = document.querySelector(".clickBtn");
	
	let counter = 1;

	btn.addEventListener("click", () => {
	
	  	let element = dataSet[counter];
		// destructuring for element
		let {rating, text, user} = element;
		let link = element.url;
		display.innerHTML = `
			<div class = "container"> 
				<p>Rating out of five: ${rating}</p>
				<p>${text}</p>
				<p><a href = "${link}" target="_blank">Read Full Review </a></p>
				<p>${user.name}</p>
			</div> `
		// Modulus operator ensures the counter starts over at zero, 0, 1, 2, 0
			counter = (counter + 1) % dataSet.length;
	});

}
payload();