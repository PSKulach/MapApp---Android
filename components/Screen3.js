import React, { Component } from 'react';
import { View, Text, Button, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import FlatListed from './FlatListed';
import MyButton from './MyButton';
import { MapView } from 'expo';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let array = []
        console.log(this.props.navigation.state.params.array[0].latitude)
        for(let i = 0;i<this.props.navigation.state.params.array.length;i++){
            array.push(<MapView.Marker 
                coordinate = {{
                    latitude:this.props.navigation.state.params.array[i].latitude,
                    longitude: this.props.navigation.state.params.array[i].longitude,
                }}
                title={"pos"}
                description={"opis"}
                key = {"key"+ i}
                />)
            }
        return (
            <MapView
            
    style={{ flex: 1 }}
    initialRegion={{
        latitude:this.props.navigation.state.params.array[0].latitude,
        longitude: this.props.navigation.state.params.array[0].longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    }}
>
{array}

</MapView>
        );
    }
}
