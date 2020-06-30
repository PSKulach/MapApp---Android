import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text,Button,TextInput,TouchableOpacity } from 'react-native';
class AnyClass extends Component{
    constructor(props) {
        super(props);
        this.state = {
           login:this.props.login,
           pass:this.props.pass,
           that:this.props.onPress1
        };
      }
      render(){
          return (
            <View style={{justifyContent:"center"}}>
            <TouchableOpacity onPress={this.state.that.handlebaton}>
              <View style={{width:800,height:100,borderRadius:9}}>
              <Text style={{color:"black",fontWeight:"bold",textAlign:"center",fontSize:50}}>REGISTER</Text>
              </View>
            </TouchableOpacity>
            </View>
          )
      }
}

AnyClass.propTypes = {
    login: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    onPress1: PropTypes.object.isRequired,
};

export default AnyClass