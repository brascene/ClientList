let initialState = {
  clientList: [
      {
        id: 1,
        name: 'Dino',
        imageUri: require('../../assets/avatar.jpg'),
        color: 'blue'
      },
      {
        id: 2,
        name: 'Mircea',
        imageUri: require('../../assets/avatar.jpg'),
        color: 'green'
      },
      {
        id: 3,
        name: 'X',
        imageUri: require('../../assets/avatar.jpg'),
        color: 'black'
      }
    ]
}

export default function reducer(state = initialState, action = {}) {
	switch (action.type){
	case 'EDIT_PROFILE': {
    console.log("Opaljen edit")
    console.log(action.payload)
    return {
      ...state, clientList: state.clientList.map(
        (client, i) => client.id === action.payload.id ? {
          ...client, name: action.payload.name, color: action.payload.color
        } : client
      )
    }
	}
  case 'REMOVE_CLIENT': {
    return {
      ...state, clientList: state.clientList.filter((client, i) => client.id !== action.payload)
    }
  }
  case 'ADD_NEW_CLIENT': {
    return {
      ...state, clientList: state.clientList.concat({id: state.clientList.length + 1,
      name: action.payload.name,
      imageUri: require('../../assets/avatar.jpg'),
      color: action.payload.color})
    }
  }
}
return state
}
