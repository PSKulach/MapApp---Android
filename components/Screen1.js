import React, { Component } from 'react';
import { View, Text, Button, FlatList, TextInput, TouchableOpacity } from 'react-native';
//import MyButton from './MyButton';
import MyButton from './MyButton';
//import AnyClass from "./components/PropTypes"

export default class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.gogo = this.gogo.bind(this)
        this.state = {
        };
    }
    gogo = () => {
        console.log("")
    }
    onPress = () => {

        this.props.navigation.navigate("s2", { login: this.state.login, password: this.state.password })
    }

    render() {
        console.log(this.state)
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{}}
                    onPress={this.onPress}
                >
                    <MyButton testProp1="START" testProp2="b" testPress={() => this.onPress} />
                </TouchableOpacity>
            </View>
        );
    }
    static navigationOptions = {
        // header: null,
        title: "Geo App",
        headerStyle: {
            backgroundColor: "#000000",
            height: 300,
            

        },
        headerTitleStyle: {
            alignSelf:"center",
            color: "#ffffff",
            justifyContent: "space-between",
            fontSize: 30,
            flex:2
        }
    }
}
