// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");

function getCountry(country) {
    let url = "https://restcountries.com/v3.1/name/"
    const request = new XMLHttpRequest;
    request.responseType = "json";
    console.log(request)
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            const [data] = request.response;
            renderCountry(data);
            console.log(data)
        }
    }
    request.open('GET', url + country)
    request.send()
}
// console.log(getCountry("Turkey"))

// function getCountryAndNeighbour(country) {
//     let url = "https://restcountries.com/v3.1/name/"
//     let alpha = "https://restcountries.com/v3.1/alpha/"
//     const request = new XMLHttpRequest;
//     request.open('GET', url + country)
//     request.send()
//     console.log(request)
//     request.addEventListener("load", () => {
//         const response = JSON.parse(this.responseText);
//         console.log(response)

//     })
// }

const getCountryAndNeighbour = (country) => {
    const url = "https://restcountries.com/v3.1/name/"
    const alpha = "https://restcountries.com/v3.1/alpha/"
    const request = new XMLHttpRequest();


    //request.responseType = "json";
    request.open("GET", url + country);
    request.send();

    request.addEventListener("load", function () {
        // console.log(this.responseText)
        const response = JSON.parse(this.responseText);
        renderCountry(response[0])

        const request2 = new XMLHttpRequest();

        request2.open("GET", alpha + response[0].borders[0]);
        request2.send();
        console.log(response[0].borders[0]);
        console.log(response[0].cca2);
        request2.addEventListener("load", function () {
            const response = JSON.parse(this.responseText);
            renderCountry(response[0], "neighbour")
        }
        )
    }
    )
}
btn.addEventListener("click", displayCountries)  // ERR???

// getCountryAndNeighbour("Turkey")

// const load  = function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);
//         console.log(data)
// }
