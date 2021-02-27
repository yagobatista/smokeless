import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
    async save(key, data) {
        AsyncStorage.setItem(key, JSON.stringify(data))    
    },
    async get(key)  {
        const dataStringfied = await AsyncStorage.getItem(key);
        return JSON.parse(dataStringfied)
    }
}