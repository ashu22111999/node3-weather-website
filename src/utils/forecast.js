const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bf341ae0e676f6e7c7c1273c5b648054&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefinded)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.current)
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + ' degrees out. Humidity is ' + body.current.humidity + '. Wind direction is ' + body.current.wind_dir + '. It feels like '+  body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast