import axios from "axios"

const foodMenu = async() => {
    const URL = 'http://192.168.0.14:8080/foodMenu'
    try {
        const result = await axios.get(URL)
            return result.data
    } catch (error) {
        Alert.alert(error.message)
    }
}

const drinkMenu = async() => {
    const URL = 'http://192.168.0.14:8080/drinkMenu'
    try {
        const result = await axios.get(URL)
            return result.data
    } catch (error) {
        Alert.alert(error.message)
    }
}


export default {foodMenu, drinkMenu}