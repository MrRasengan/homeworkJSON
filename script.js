const parseData = JSON.parse(data);
console.log(parseData);

const divEl = document.querySelector(".content");
parseData.forEach((item) => {
	divEl.insertAdjacentHTML(
		"beforeend",
		`
    <h2>${item.name}</h2>
    <p>${item.image}</p>
    <span>${item.status}</span>
    <span>${item.origin.url}</span>
    `
	);
});