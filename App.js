<<<<<<< HEAD

import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
=======
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
>>>>>>> origin/main

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';

<<<<<<< HEAD
//onst img = require('./assets/background.jpg')

export default function App() {

  const [text, onChangeText] =React.useState("");
  const [bimage, setBImage] = useState("");
  const [city, setCity] = React.useState("London")
  const [weatherData, setWeatherData] = useState({main:{feels_like:0,
  humidity: 0,
temp_max: 0,
temp_min: 0
},weather:[{description:''}]});

useEffect(() => {

  fetch('http://api.openweathermap.org/data/2.5/forecast?q=pretoria,ZA,current&units&appid=7cf3f1f56bdc1180656fd061053012e7')
  .then(res =>res.json() )
  .then(data => {

    console.log(data.list[0])
    setWeatherData(data.list[0])

  imageselector(data.list[0].weather[0].description)
  }).catch(err=>{console.log(err) })

}, [],);

function imageselector(image,temp){
  if(image == "overcast clouds"){
    setBImage({uri: "https://images.pexels.com/photos/11126184/pexels-photo-11126184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })
  }
  else if(image == "clear sky"){
    setBImage({uri: "https://images.pexels.com/photos/2102367/pexels-photo-2102367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })
  }
  else if(image == "light rain"){
    setBImage({uri: "https://images.pexels.com/photos/1207926/pexels-photo-1207926.jpeg?auto=compress&cs=tinysrgb&w=400" })
  }
  else if(image == "few clouds"){
    setBImage({uri: "https://images.pexels.com/photos/11091852/pexels-photo-11091852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })
  }
  else if(image == "scattered clouds"){
    
    if(temp < 0){
      setBImage({uri: "https://images.pexels.com/photos/10932715/pexels-photo-10932715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })
    }
    else{
      setBImage({uri: "https://images.pexels.com/photos/11107235/pexels-photo-11107235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })
    }
  }

  else if(image == "heavy rain"){
    setBImage({uri: "https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })
  }
  else if(image == "broken clouds"){
    setBImage({uri: "https://images.pexels.com/photos/11086518/pexels-photo-11086518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })
  }
  else{
    setBImage({uri: "https://images.pexels.com/photos/5473054/pexels-photo-5473054.jpeg?auto=compress&cs=tinysrgb&w=400" })
  }
}


  return (
   <ImageBackground source={bimage} resizeMode="cover" style={styling.image}>

    <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,.7)']} style={{alignItems: "center", textAlign: "center"}}>
      <View style={{backgroundColor: "none", height: 800, alignItems: "center"}}>
        <View style={{backgroundColor: "none",height: 100, alignItems: 'center'}}>
          <TextInput style={styling.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your City" />

          <Button title="Search City"
          color="grey"
          onPress={() =>{
            setCity(text)

            fetch('http://api.openweathermap.org/data/2.5/forecast?q='+text+',ZA,current&units&appid=7cf3f1f56bdc1180656fd061053012e7')
            .then(res => res.json())
            .then(data => {setWeatherData(data.list[0])
            
            console.log(data.list[0].main.feels_like)
          
          imageselector(data.list[0].weather[0].description, data.list[0].main.feels_like)
        }).catch(err=>{console.log(err);alert("City does not exist.") })
          }} />
        </View>

        <View>
          <Text style={styling.location}>{city}</Text>
          <Text style={styling.citytitle}>{weatherData.weather[0].description.toUpperCase()}</Text>
        </View>

        <View style={{flexDirection: "row"}}></View>
        <View style={{flexDirection: "column"}}>
          <Text style={styling.titles}> Min   {weatherData.main.temp_min} °C  </Text>
          <Text style={styling.titles}> Max   {weatherData.main.temp_max} °C  </Text>
          <Text style={styling.titles}> Feels   {weatherData.main.feels_like} °C  </Text>
        </View>

      </View>
    </LinearGradient>
   </ImageBackground>
=======
const API_KEY = '8ec1dc42ea52fda1122ba8c594c5dca6';

const img = require('./assets/background.jpg')

export default function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      let {latitude, longitude } = success.coords;
      fetchDataFromApi(latitude, longitude)
    }, (err) => {
      fetchDataFromApi("40.7128", "74.0060")
    }) 
      
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

      console.log(data)
      setData(data)
    })
    }
    
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image} >
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />
        <WeatherScroll weatherData={data.daily} />
      </ImageBackground>
    </View>
>>>>>>> origin/main
  );
}

const styling = StyleSheet.create({
  location: {
    color: "white",
    fontSize: 50,
    paddingTop: 60,
    marginBottom:0,
    paddingLeft: 10,
  },
  titles: {
    color: "white",
    fontSize: 20,
    marginLeft: 0,
    marginBottom: 2,
    paddingLeft: 4,
    textAlign: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderBottomColor: 'white',
    borderTopColor: 'rgba(0,0,0,0)',
    borderLeftColor: 'rgba(0,0,0,0)',
    borderRightColor: 'rgba(0,0,0,0)',
  },
  image: {
    resizeMode: "cover",
  },
  citytitle:{
    color: "white",
    fontSize: 40,
    paddingTop: 60,
    marginBottom: 150,
    paddingLeft: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth:1,
    padding: 10,
    borderColor: 'white',
    width: 200,
    borderTopColor: "rgba(0,0,0,0)",
    borderLeftColor: "rgba(0,0,0,0)",
    borderRightColor: "rgba(0,0,0,0)",
    color: "white",
  },
});
