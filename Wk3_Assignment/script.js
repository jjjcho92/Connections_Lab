window.addEventListener('load', function () {
    console.log('page is loaded');
    fetch('speed.json')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let countryArray = data;
            let randomNumber = Math.floor(Math.random() * countryArray.length);
            let randomNumber2 = Math.floor(Math.random() * countryArray.length);
            let nameElement_1 = document.getElementById('country1');
            let nameElement_2 = document.getElementById('country2');

            let names = data.Country;
            for (let i = 0; i < data.length; i++) {
                let elt = document.createElement('c');
                // console.log(elt.innerHTML = data[i].Country);
                //  nameElement.appendChild(elt);
                nameElement_1.innerHTML = countryArray[randomNumber].Country;
                nameElement_2.innerHTML = countryArray[randomNumber2].Country;
            }

            let speedElement_1 = document.getElementById("country1_speed");
            speedElement_1.innerHTML = countryArray[randomNumber].Speed;
            let speedElement_2 = document.getElementById("country2_speed");
            speedElement_2.innerHTML = countryArray[randomNumber2].Speed;


        })
})