import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, ActivityIndicator, FlatList, Text } from 'react-native';
import FlatListed from './FlatListed';
import MyButton from './MyButton';
import { Location, Permissions, } from 'expo';

import { AsyncStorage } from "react-native"

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.gogo = this.gogo.bind(this)
    this.state = {
      data: [],
      number: 1,
      markers: []
    };
    this.keyExtractor = (item, index) => "id = " + item.timestamp;
    this.handleData = this.handleData.bind(this)
  }
  gogo = () => {
    console.log("lol")
  }
  onPress = () => {
    this.props.navigation.navigate("s1", { login: 1, password: 1 })

  }
  mapFunc = () => {
    console.log("Markers",this.state.markers)
    this.props.navigation.navigate("s3", { array: this.state.markers})

  }
  componentDidMount = () => {
    this.getAllData()

  }
  setPermissions = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('odmawiam przydzielenia uprawnień do czytania lokalizacji')
    }
  }



  getPositions = async () => {
    let proceed = false
    //alert("JSON.stringify(pos, null, 4)")
    this.setState({ number: 0 })
    Alert.alert(
      'pozycja',
      'pozycja została pobrana - czy zapisać ?',
      [
        {
          text: 'Tak', onPress: () => {
            proceed = true
            
            this.setState({ number: 1 })
          }
        },
        {
          text: 'Nie', onPress: () => {
            
            proceed = false
            this.setState({ number: 1 })
          }
        },
      ],
      { cancelable: false }
      )
        console.log(this.state.data)
          let pos = await Location.getCurrentPositionAsync({})
        
        //while (proceed == true) {
          console.log(JSON.stringify(pos))
          this.setState({ data: [...this.state.data, { timestamp: pos.timestamp, longitude: pos.coords.longitude, latitude: pos.coords.latitude }] })
          await AsyncStorage.setItem('key-positions', JSON.stringify(this.state.data));
          
          // }
          // }
        }
        getAllData = async () => {
          let data = await AsyncStorage.getItem('key-positions');
          if (!!data)
          this.setState({ data: JSON.parse(data) })
          console.log("asdasd", this.state.data)
        }
        deletePositions = async ()=>{
         await AsyncStorage.clear();
         this.setState({data:[]})
        }
        handleData = (item,check) =>{
          console.log(check)
          if(check == false)
          this.setState({ markers: [...this.state.markers,{ timestamp: item.timestamp, longitude: item.longitude, latitude: item.latitude }]})
          else
          for(let i = 0;i<this.state.markers.length;i++){
            console.log("LOL",this.state.markers[i])
            if(this.state.markers[i].timestamp == item.timestamp)
            this.state.markers.splice(i,1)
          }
          console.log("Przyszło",this.state.markers)
        }
        render(){



    return (
      <View style={{ flexDirection: 'column' }} >
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{}}
            onPressIn={this.setPermissions}
            onPress={this.getPositions}
            style={{ margin: 0, marginBottom: 10, }}

          >
            <MyButton testProp1="POBIERZ I ZAPISZ POZYCJĘ" testProp2="a" testPress={() => this.gogo} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
            onPress={this.mapFunc}
            style={{ margin: 0, marginBottom: 10 }}
          >
            <MyButton testProp1="PRZEJDŹ DO MAPY" testProp2="c" testPress={() => this.gogo} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
             onPress={this.deletePositions}
            style={{ margin: 0, marginBottom: 10 }}
          >
            <MyButton testProp1="USUŃ WSZYSTKIE DANE" testProp2="b" testPress={() => this.gogo} />
          </TouchableOpacity>

        </View>
        {
          this.state.number == 0 ?
            <ActivityIndicator size="large" color="#0000ff" />
            :
            <FlatList
              data={
                this.state.data
              }
              keyExtractor={this.keyExtractor}
              renderItem={({ item }) =>
                <FlatListed array={item} func = {this.handleData} />
              }
            />
        }
      </View>
    );
  }
}
