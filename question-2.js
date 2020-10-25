const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    try {

    const response = await fetch(url);

    const data = await response.json();

    const facts = data.results;

    resultsContainer.innerHTML = "";

    // name

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].name);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].name}</div>`;
    }

    // rating

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].rating);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].rating}</div>`;
    }

    // number/amount of tags

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].tags.length);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].tags.length}</div>`;
    }

    // if an error occurred

    } 
     
    catch(error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
     
}

getGames();