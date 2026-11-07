import React, {useState} from 'react';
import {View, Text, Button, Alert, TouchableOpacity, ToastAndroid, Image, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {FontAwesome6} from "@expo/vector-icons/";
import Quizqns from './components/quiz';


const MyApp = () => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [showFunFact, setShowFunFact] = useState(false);

  return (
      <ScrollView>
        <Text></Text>
        <Quizqns quizimage={{uri: 'https://images.pexels.com/photos/1099105/pexels-photo-1099105.jpeg?cs=srgb&dl=nature-summer-grass-1099105.jpg&fm=jpg'}}
                 question="What flower is this" option1="Sunflower" option2="Dandelion" option3="Daffodil"
                 onValueChange={(value) => setQ1(value)}/>
        <Quizqns quizimage={{uri: 'https://i.pinimg.com/originals/1d/74/1e/1d741e69e92279005dec609b1ee84c19.jpg'}}
                 question="What flower is this" option1="Spider lily" option2="Silverbell" option3="Lily of the valley"
                 onValueChange={(value) => setQ2(value)}/>
        <Quizqns quizimage={{uri: 'https://thursd.com/storage/media/76063/dainty-forget-me-not-flowers.jpg?1726231162463'}}
                 question="What flower is this" option1="Forget-Me-Not" option2="Desert bluebell" option3="Morning glory"
                 onValueChange={(value) => setQ3(value)}/>

        <Text></Text>
          {showFunFact &&

              <TouchableOpacity
                  style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                  }}
                  onPress={() => {
                      Alert.alert(
                          'Fact Fun: All the flowers have a meaning',
                          'Dandelion - Hope and resilience\n\n' +
                          'Lily of the Valley - Purity and happiness\n\n' +
                          'Forget-Me-Not - True love and remembrance'
                      );
                  }}
              >

                  <FontAwesome6
                      name="magnifying-glass"
                      size={20}
                  />

                  <Text
                      style={{
                          fontWeight: 'bold',
                          marginLeft: 5,
                      }}
                  >
                      FUN FACT
                  </Text>

              </TouchableOpacity>

          }

          <Button
            title="SUBMIT"
            onPress={() => {

              if (q1 == '' || q2 == '' || q3 == '') {
                Alert.alert(
                    'Missing Answer',
                    'Please answer all questions before submitting.'
                );
                return;
              }

              let score = 0;
              let wrong = '';

              if (q1 == 'Dandelion') {
                score++;
              } else {
                wrong += '\nQuestion 1';
              }

              if (q2 == 'Lily of the valley') {
                score++;
              } else {
                wrong += '\nQuestion 2';
              }

              if (q3 == 'Forget-Me-Not') {
                score++;
              } else {
                wrong += '\nQuestion 3';
              }

                let result = 'Score: ' + score + '/3';

                if (wrong != '') {
                    result += '\n\nWrong Answers:' + wrong;
                }
                else {
                    result += '\n\nA FUN FACT section is now available above the Submit button. Click it to know more about these flowers';
                }

              Alert.alert(
                  'Quiz Result',
                  result
              );

              if (score == 3) {
                setShowFunFact(true);
                ToastAndroid.show(
                    'Good job! Congratulations!',
                    ToastAndroid.SHORT
                );
              } else {
                setShowFunFact(false);

                if (score == 0) {
                  ToastAndroid.show(
                      'Wanna try again?',
                      ToastAndroid.SHORT
                  );
                }
                else if (score == 1) {
                  ToastAndroid.show(
                      'Better luck next time!',
                      ToastAndroid.SHORT
                  );
                }
                else if (score == 2) {
                  ToastAndroid.show(
                      'Not bad!',
                      ToastAndroid.SHORT
                  );
                }
              }

            }}
        />

        <Text></Text>

      </ScrollView>
  );
};

export default MyApp;
