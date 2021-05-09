const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bf341ae0e676f6e7c7c1273c5b648054&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefinded)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + ' degrees out. It feels like '+  body.current.feelslike + ' degrees out.')
        }
        // console.log(response)
        // const data = JSON.parse(response.body)
        // console.log(data.current)
        // console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + ' degrees out. It feels like '+  response.body.current.feelslike + ' degrees out.')
    })
}

module.exports = forecast