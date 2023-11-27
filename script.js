
fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/5032/current?token=ba01562a9428311364f3929bc4d65e6d")
  .then(response => response.json())
  .then(result => {
    const city = result.name
    const state = result.state

    const main = document.querySelector("main")
    main.insertAdjacentHTML('afterbegin', `
      <h3>Tempo agora em</h3>
      <h3>${city}, ${state}</h3>
    `)


    const temperature = result.data.temperature
    const sensation = result.data.sensation
    const condition = result.data.condition
    const icon = result.data.icon

    const temperatureP = document.querySelector("#temp-div")
    temperatureP.insertAdjacentHTML('afterbegin', `
      <img src="https://www.climatempo.com.br/dist/images/v2/svg/${icon}.svg" alt="temperature" id="img-temp">
      <h2>${temperature}°</h2>
    `)

    const sensationP = document.querySelector("#sensation-div")
    sensationP.insertAdjacentHTML('afterbegin', `
      <img src="https://www.climatempo.com.br/dist/images/sensation-icon.png" alt="fire">
      <p>Sensação ${sensation}°</p>
    `)

    const clima = document.querySelector("#condition-div")
    clima.insertAdjacentHTML('afterbegin', `
      <img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg" alt="cloud">
      <p>${condition}</p>
    `)


    const wind = result.data.wind_velocity
    const humidity = result.data.humidity

    const vento = document.querySelector('#wind-div')
    vento.insertAdjacentHTML('afterbegin', `
      <span id="blue-span"></span>
      <h3>VENTO</h3>
    `)
    const vento2 = document.querySelector('#wind-div2')
    vento2.insertAdjacentHTML('afterbegin', `
      <p>${wind} km/h</p>
    `)

    const umidade = document.querySelector('#humidity-div')
    umidade.insertAdjacentHTML('afterbegin', `
      <span id="green-span"></span>
      <h3>UMIDADE</h3>
    `)
    const umidade2 = document.querySelector('#humidity-div2')
    umidade2.insertAdjacentHTML('afterbegin', `
      <img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-humidity-max.svg" alt="humidity">
      <p>${humidity}%</p>
    `)
  })
.catch(error => console.log('Erro:', error))

