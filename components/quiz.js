import React, {useState} from "react";
import {View, Text, Button, Alert, TouchableOpacity, ToastAndroid, Image, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Quizqns = ({question, quizimage, option1, option2, option3, onValueChange})=> {
    return (
        <View>
            <Image source={quizimage}
                   style={{width:400, height:500}}/>
            <Text style={{fontSize: 20, fontWeight:"bold"}}>{question}</Text>
            <Picker
                onValueChange={(value) => onValueChange(value)}
                style={{
                    backgroundColor: 'grey',
                }}
            >
                <Picker.Item label="Select Answer" value="" />
                <Picker.Item label={option1} value={option1}/>
                <Picker.Item label={option2} value={option2}/>
                <Picker.Item label={option3} value={option3}/>
            </Picker>
        </View>
    );
};


export default Quizqns;