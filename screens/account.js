import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, SafeAreaView  } from 'react-native';
import { withNavigation } from "react-navigation";

class Account extends React.Component {

  state = {
    firstName_Placeholder: "First Name",
    firstName_value: null,
    lastName_Placeholder: "Last Name",
    lastName_value: null,
    email_Placeholder: "Email Address",
    email_value: null,
    password_Placeholder: "Password",
    password_value: null,
  }

  onFocus = () => {
    this.textInput.setNativeProps({
      style: { backgroundColor: 'green' }
    })
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.textInputsContainerInline}>
         <TextInput
           style={styles.textInputInline}
           placeholder={this.state.firstName_Placeholder}
           onChangeText={(value) => this.setState({firstName_value: value})}
           value={this.state.firstName_value}
         />
         <TextInput
           style={styles.textInputInline}
           placeholder={this.state.lastName_Placeholder}
           onChangeText={(value) => this.setState({lastName_value: value})}
           value={this.state.firstName_value}
         />
        </View>

        <View style={styles.textInputsContainer}>
         <TextInput
           style={styles.textInputFullWidth}
           placeholder={this.state.email_Placeholder}
           onChangeText={(value) => this.setState({email_value: value})}
           value={this.state.firstName_value}
         />
         <TextInput
           style={styles.textInputFullWidth}
           placeholder={this.state.password_Placeholder}
           onChangeText={(value) => this.setState({password_value: value})}
           value={this.state.firstName_value}
         />
       </View>

       <View style={styles.container500}>
         <TouchableHighlight style={styles.button} onPress={() => {this.submitForm}}>
           <Text style={styles.buttonText}>
             Submit
           </Text>
         </TouchableHighlight>
       </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  inlinebuttons: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'left',
  },
  button: {
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#000",
    borderWidth: 0,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  textInputsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  textInputsContainerInline: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  textInputInline: {
    borderWidth: 0,
    backgroundColor: "rgb(240, 240, 240)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
  },
  textInputFullWidth: {
    borderWidth: 0,
    backgroundColor: "rgb(240, 240, 240)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    alignSelf: 'stretch',
  },
  container500: {
    width: 400,
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    marginVertical: 10,
  }
});

export default withNavigation(Account);
