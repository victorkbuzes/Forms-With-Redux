import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUser } from '../features/userSlice'
import { User } from '../components/User'


export const JokesScreen = () => {

    const inputStyle = {
        borderWidth: 1,
        borderColor: '#4e4e4e',
        padding: 12,
        marginBottom: 5,
      };


    const [user, setUsers] = useState({
        email: '',
        width: '',
    })
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUser)
    console.log("userInfo", userInfo);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsers({...user,[name] : value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser);
    };


  return (
    <View>
        <Text>Hello</Text>
        <TextInput placeholder='name' onChange={handleChange}  style = {inputStyle}   />
        <TextInput placeholder='email'  style = {inputStyle}   />

    


    </View>
  )
}

