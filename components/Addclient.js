import React from 'react';
import { StyleSheet, TextInput, View, Text, FlatList, Button } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { saveNewClient } from '../redux/actions/profileActions'
import { connect } from 'react-redux'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

class CreateClient extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      color: ''
    }
  }
  saveNewClient(data) {
    console.log("Save this")
    if (data.name !== "" && data.color !== ""){
      this.props.saveNewClient(data)
      this.props.navigation.dispatch(resetAction)
    }
  }
  render() {
    return (
      <View style={styles.container}>

      <View style={{flexDirection:'column', width: 200}}>
      <Text>Name</Text>
        <TextInput
        onChangeText={(name) => this.setState({name})}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.name}
         />
      </View>

      <View style={{flexDirection:'column', width: 200}}>
      <Text>Color</Text>
        <TextInput
        onChangeText={(color) => this.setState({color})}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.color}
         />
      </View>

      <View>
        <Button
          onPress={() => this.saveNewClient({
            name: this.state.name,
            color: this.state.color
          })}
          title="Confirm"
          color="#841584"
          />
      </View>

      </View>
    );
  }
}

export default connect(null, { saveNewClient })(CreateClient)

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems:'center'
  },
});
