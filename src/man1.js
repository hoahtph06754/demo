import React, {Component} from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
class Man1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Email</Text>
                <TextInput type={}></TextInput>
            </View>
        );
    }
}

export default Man1;
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})