import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableHighlight, TextInput, SafeAreaView  } from 'react-native';
import { withNavigation } from "react-navigation";

class FormScreen extends React.Component {

  state = {
    firstName_Placeholder: "First Name",
    firstName_value: "",
    lastName_Placeholder: "Last Name",
    lastName_value: "",
    email_Placeholder: "Email Address",
    email_value: "",
    password_Placeholder: "Password",
    password_value: "",
  }

  onFocus = () => {
    this.textInput.setNativeProps({
      style: { backgroundColor: 'green' }
    })
  }

  submitForm = () => {
    if (this.state.firstName_value != "" && this.state.lastName_value != "" && this.state.email_value != "" && this.state.password_value != "") {
      this.props.navigation.navigate("Account", {
        firstName: this.state.firstName_value,
        lastName: this.state.lastName_value,
        email: this.state.email_value,
        password: this.state.password_value
      });
      console.log("Filled");
    } else {
      Alert.alert("Fill All Fields");
      console.log("Not Filled");
    }
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
           value={this.state.lastName_value}
         />
        </View>

        <View style={styles.textInputsContainer}>
         <TextInput
           style={styles.textInputFullWidth}
           placeholder={this.state.email_Placeholder}
           onChangeText={(value) => this.setState({email_value: value})}
           value={this.state.email_value}
         />
         <TextInput
           style={styles.textInputFullWidth}
           placeholder={this.state.password_Placeholder}
           onChangeText={(value) => this.setState({password_value: value})}
           value={this.state.password_value}
         />
       </View>

       <View style={styles.container500}>
         <TouchableHighlight style={styles.button} onPress={this.submitForm}>
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

export default withNavigation(FormScreen);
