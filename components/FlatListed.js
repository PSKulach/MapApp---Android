import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native'
import MyButton from './MyButton';
import { AsyncStorage } from "react-native"

export default class FlatListed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ],
            refresh: false,
            check:false,
            markers: []
        };
    }

    checking = (item,check) => {
        if(this.state.check == false){
            this.props.func(item,check)
        this.setState({ check: true})
        }
        else{
            this.props.func(item,check)
            this.setState({check:false})
        }
    }
    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 30, marginRight: 30, marginTop: 30 }}>

                <Image style={{ width: 60, height: 60 }} source={require('../assets/images/SattView.png')} />
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontWeight: "bold" }}>
                        Timestamp: {this.props.array.timestamp}
                    </Text>
                    <Text>
                        Longitude: {this.props.array.longitude}
                    </Text>
                    <Text>
                        Latitude:{this.props.array.latitude}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{}}
                    onPress={() => this.checking(this.props.array,this.state.check)}
                >{
                    this.state.check == true ?
                     <Image style={{ width: 30, height: 30 ,marginLeft:30}} source={require('../assets/images/greenCheck.png')} />
                    :<Image style={{ width: 30, height: 30,marginLeft:30 }} source={require('../assets/images/redCheck.png')} />
                }
                </TouchableOpacity>
            </View>

        );
    }
}
