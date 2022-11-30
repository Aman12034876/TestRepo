import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen1</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'black'
    }
})