
import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectedUser } from '../features/userSlice'

export const User = () => {
    const user = useSelector(selectedUser);
  return (
    <View>
      <Text>User Email  is</Text>
      <Text>{user?.email}</Text>
      <Text>{user?.password}</Text>
    </View>
  )
}

