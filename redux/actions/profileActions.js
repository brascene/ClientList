export const editProfile = (newData) => {
	return {
		type: 'EDIT_PROFILE',
		payload: newData
	}
}

export const removeFromClients = (id) => {
	return {
		type: 'REMOVE_CLIENT',
		payload: id
	}
}

export const saveNewClient = (data) => {
	return {
		type: 'ADD_NEW_CLIENT',
		payload: data
	}
}
