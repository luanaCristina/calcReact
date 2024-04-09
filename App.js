import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Row from './components/Row';
import calculator, {initialState} from './util/calculator';
import { Component } from 'react';

export default class App extends Component {
  state = initialState;

  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render(){
    return (
      <View style={styles.container}>
       <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(this.state.currentValue).toLocaleString()}
        </Text>

        //component Row
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={()=> this.HandleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={()=> this.HandleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={()=> this.HandleTap("porcentage")}
          />
          <Button
            text="/"
            theme="secondary"
            onPress={()=> this.HandleTap("operator", "/")}
          />
        </Row>
        </SafeAreaView> 
      </View>
    )
  }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
