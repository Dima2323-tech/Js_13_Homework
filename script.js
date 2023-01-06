window.onload = () => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/list/all")
    xhr.send();
    xhr.onload = function () {
        let data = JSON.parse(xhr.response)
        for (const [value] of Object.entries(data.message)) {
            let option = document.createElement('option')
            option.classList.add('Dog')
            let select = document.getElementsByName('Dogs')
            select[0].appendChild(option)
            option.innerHTML = value

            option.onclick = function () {
                let results = document.getElementById('results')
                const xhrImage = new XMLHttpRequest();
                xhrImage.open('GET', "https://dog.ceo/api/breed/" + option.value + "/images/random")
                xhrImage.send();
                xhrImage.onload = function () {
                    let imgData = JSON.parse(xhrImage.response)
                    results.setAttribute('src', `${imgData.message}`)
                }
            }


            document.querySelector('#Dogs').addEventListener('click', ()=> {

            })
        }
    }


    //#2) Зробити запит і отримати користувачів, отриману інформацію вивести в вигляді карточок
    const xhrPeople = new XMLHttpRequest();
    xhrPeople.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhrPeople.send();
    xhrPeople.onload = function () {
        let date = JSON.parse(xhrPeople.response)
        Object.entries(date).forEach(([key, value]) => {
            let cardContainer = document.getElementById('Ccontainer')
            let Card = document.createElement('div')

            let addressInput = document.createElement('span')
            addressInput.classList.add('address')

            let companyInput = document.createElement('span')
            companyInput.classList.add('company')

            let emailInput = document.createElement('span')
            emailInput.classList.add('email')

            let nameInput = document.createElement('span')
            nameInput.classList.add('name')

            let phoneInput = document.createElement('span')
            phoneInput.classList.add('phone')

            let websiteInput = document.createElement('span')
            websiteInput.classList.add('website')

            let idInput = document.createElement('span')
            idInput.classList.add('id')

            let userNameInput = document.createElement('span')
            userNameInput.classList.add('userName')

            cardContainer.appendChild(Card)

            Card.appendChild(idInput)
            Card.appendChild(nameInput)
            Card.appendChild(emailInput)
            Card.appendChild(userNameInput)
            Card.appendChild(addressInput)
            Card.appendChild(phoneInput)
            Card.appendChild(websiteInput)
            Card.appendChild(companyInput)


            idInput.innerHTML = Object.keys(value)[0] + `: `+ value.id
            nameInput.innerHTML = Object.keys(value)[1] + `: `+value.name
            emailInput.innerHTML = Object.keys(value)[3] + `: `+ value.email
            userNameInput.innerHTML = Object.keys(value)[2] + `: `+ value.username
            addressInput.innerHTML = Object.keys(value)[4] + `: `+ value.address.street + `   ` + value.address.suite + `  ` + value.address.city + `  ` + value.address.zipcode + `   ` + value.address.geo.lat + `  ` + value.address.geo.lng
            phoneInput.innerHTML = Object.keys(value)[5] + `: `+ value.phone
            websiteInput.innerHTML = Object.keys(value)[6] + `: `+ value.website
            companyInput.innerHTML = Object.keys(value)[7] + `: `+ value.company.catchPhrase +  value.company.name + value.company.bs



            cardContainer.style.display = 'flex'
            cardContainer.style.flexFlow = 'column'
            cardContainer.style.width = 800 + 'px'
            Card.style.height = 400 + 'px'
            Card.style.fontSize = 20 + 'px'
            Card.style.justifyContent = 'center'
            Card.style.borderRadius = 15 + 'px'
            Card.style.backgroundColor = 'black'
            Card.style.display = 'flex'
            Card.style.flexFlow = 'column'
            Card.style.color = 'white'
            cardContainer.style.textAlign = 'center'
            Card.style.margin = 25 + 'px'
        })
    }

    // 3) Вивести список планет в вигляді карток, і зробити кнопки для фільтрування планет за розміром
    // (при кліку на кнопку планети повині вивестись від більшого розміру до меншого і при кліку знову від меншого до більшого)
    // Зробити такий самий фільтр по population

    const xhrPlanet = new XMLHttpRequest();
    xhrPlanet.open('GET', 'https://swapi.dev/api/planets')
    xhrPlanet.send();
    xhrPlanet.onload = function () {
        let planeDate = JSON.parse(xhrPlanet.response)
        let sortBtn = document.querySelector('.SortBtn')
        let sortBtn2 = document.querySelector('.SortBtn2')

        function planet() {
            let planetContainer = document.getElementById('Pcontainer')
            let planetContent = document.createElement('div')
            planetContent.setAttribute('id' , 'content')
            planetContainer.appendChild(planetContent)
            Object.entries(planeDate.results).forEach(([key, value]) => {

                let PlanetCard = document.createElement('div')

                PlanetCard.setAttribute('name', 'Card')

                let PlanetName = document.createElement('span')
                PlanetName.classList.add('PlanetName')

                let rotation_period = document.createElement('span')
                rotation_period.classList.add('rotation_period')

                let orbital_period = document.createElement('span')
                orbital_period.classList.add('orbital_period')

                let diameter = document.createElement('span')
                diameter.classList.add('diameter')

                let climate = document.createElement('span')
                climate.classList.add('climate')

                let gravity = document.createElement('span')
                gravity.classList.add('gravity')

                let terrain = document.createElement('span')
                terrain.classList.add('terrain')

                let surface_water = document.createElement('span')
                surface_water.classList.add('surface_water')

                let population = document.createElement('span')
                population.classList.add('population')

                let films = document.createElement('span')
                films.classList.add('films')

                let created = document.createElement('span')
                created.classList.add('created')

                let edited = document.createElement('span')
                edited.classList.add('edited')

                let url = document.createElement('span')
                url.classList.add('url')

                planetContent.appendChild(PlanetCard)

                PlanetCard.appendChild(PlanetName)
                PlanetCard.appendChild(rotation_period)
                PlanetCard.appendChild(orbital_period)
                PlanetCard.appendChild(diameter)
                PlanetCard.appendChild(climate)
                PlanetCard.appendChild(gravity)
                PlanetCard.appendChild(terrain)
                PlanetCard.appendChild(surface_water)
                PlanetCard.appendChild(population)
                PlanetCard.appendChild(films)
                PlanetCard.appendChild(created)
                PlanetCard.appendChild(edited)
                PlanetCard.appendChild(url)


                PlanetName.innerHTML = Object.keys(value)[0] + ` ` + value.name
                rotation_period.innerHTML = Object.keys(value)[1] + ` ` + value.rotation_period
                orbital_period.innerHTML = Object.keys(value)[2] + ` ` + value.orbital_period
                diameter.innerHTML = Object.keys(value)[3] + ` ` + value.diameter
                climate.innerHTML = Object.keys(value)[4] + ` ` + value.climate
                gravity.innerHTML = Object.keys(value)[5] + ` ` + value.gravity
                terrain.innerHTML = Object.keys(value)[6] + ` ` + value.terrain
                surface_water.innerHTML = Object.keys(value)[7] + ` ` + value.surface_water
                population.innerHTML = Object.keys(value)[8] + ` ` + value.population
                films.innerHTML = Object.keys(value)[9] + ` ` + value.films
                created.innerHTML = Object.keys(value)[10] + ` ` + value.created
                edited.innerHTML = Object.keys(value)[11] + ` ` + value.edited
                url.innerHTML = Object.keys(value)[12] + ` ` + value.url


                planetContent.style.display = 'flex'
                planetContent.style.flexFlow = 'column'
                planetContent.style.width = 800 + 'px'
                PlanetCard.style.height = 400 + 'px'
                PlanetCard.style.fontSize = 20 + 'px'
                PlanetCard.style.justifyContent = 'center'
                PlanetCard.style.borderRadius = 15 + 'px'
                PlanetCard.style.backgroundColor = 'black'
                PlanetCard.style.display = 'flex'
                PlanetCard.style.flexFlow = 'column'
                PlanetCard.style.color = 'white'
                planetContent.style.textAlign = 'center'
                PlanetCard.style.margin = 25 + 'px'

                if (value.population == "unknown"){
                    value.population = 0
                }
            })
        }
        planet()

        let isSorted = false

        sortBtn.addEventListener('click', Sort)
        sortBtn2.addEventListener('click', SortPop)

        function Sort() {
            if (!isSorted) {
                planeDate.results.sort(function (a, b) {
                    isSorted = true
                    return a.diameter - b.diameter
                })
                planet()
            } else {
                planeDate.results.sort(function (a, b) {
                    isSorted = false
                    return b.diameter - a.diameter
                })
                planet()
            }
            if (document.getElementById('Pcontainer').childElementCount >= 2 ){
                document.getElementById('Pcontainer').removeChild(document.getElementById('Pcontainer').firstElementChild)
            }
        }
        function SortPop (){

            if (!isSorted) {
                planeDate.results.sort(function (a, b) {
                    isSorted = true
                    return parseInt(a.population - b.population)
                })
                planet()
            } else {
                planeDate.results.sort(function (a, b) {
                    isSorted = false
                    return parseInt(b.population - a.population)
                })
                planet()
            }
            if (document.getElementById('Pcontainer').childElementCount >= 2 ){
                document.getElementById('Pcontainer').removeChild(document.getElementById('Pcontainer').firstElementChild)
            }
        }
    }
}