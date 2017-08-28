import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Dimensions, Image, Button } from 'react-native';
import { connect } from 'react-redux'

const {height, width} = Dimensions.get('window');

import { removeFromClients } from '../redux/actions/profileActions'

const SingleClient = ({showDetails, deleteClient, image, name, color}) => (
  <TouchableHighlight
  style={{width:width}}
    onPress={() => showDetails()}
  >
    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
      <Image source={image} style={{width: 40, height: 40}} />
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 16, color:'black'}}>{name}</Text>
        <Text style={{fontSize: 16, color:'black'}}>{color}</Text>
      </View>
      <Button
      onPress={() => deleteClient()}
        title="Delete"
        color="#841584"
        />
    </View>
  </TouchableHighlight>
)

class Home extends React.Component {
  extractKey = (item, index) => item.id
  _showDetails = (item) => {
    console.log("Passed: ", item);
    this.props.navigation.navigate('Profile', {client: item})
  }
  _deleteClient = (item) => {
    this.props.removeFromClients(item.id)
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.clientList}
          keyExtractor={this.extractKey}
          renderItem={({item}) =>
           <SingleClient
           showDetails={() => this._showDetails(item)}
           deleteClient={() => this._deleteClient(item)}
           image={item.imageUri}
           name={item.name}
           color={item.color} /> }
         />
         <Button
           onPress={() => this.props.navigation.navigate('AddClient')  }
           title="Add new client"
           color="#841584"
           />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  clientList: state.profileReducer.clientList
})

export default connect(mapStateToProps, {removeFromClients})(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
