import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    // if (this.props.testProp2 == 'a')
    //   styl = style1
    // else if (this.props.testProp2 == 'b')
    //   styl = style2
    // else
    //   styl = style3

    return (
      <View style={{ alignSelf: 'center' }}>
        <Text style={this.props.testProp2 == 'a' ? styles.style1 : this.props.testProp2 == 'b' ? styles.style2 : styles.style3}>{this.props.testProp1}</Text>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  style1: {
    //fontWeight: "bold",
    fontSize: 15,
    marginTop: 40,
  },
  style2: {
    //  justifyContent: "space-between"
    fontSize: 15,
    marginTop: 20,
  },
  style3: {
    fontSize: 15,
    marginTop: 20,
  }
})

MyButton.propTypes = {
  testProp1: PropTypes.string.isRequired,
  //testProp2: PropTypes.string.isRequired,
  // testPress: PropTypes.func.isRequired,
};

export default MyButton