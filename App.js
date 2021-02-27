import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { FloatingAction } from "react-native-floating-action";

import { MyChart } from './chart'
import { defaultData, actionsOptions, ADD_ACTIONS } from "./config"
import storage from "./storage"


export default function App() {
  const [data, setData] = useState(defaultData)
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    const savedData = storage.get("data")
    if (savedData.datasets) {
      setData(savedData)
    }
  }, [])

  const actions = {}
  actions[ADD_ACTIONS.add_smoke] = () => {
    const now = new Date()
    data.datasets[0].data[now.getDay()]++;
    const newData = { ...data };
    storage.save("data", newData)
    setData(newData)
  }
  actions[ADD_ACTIONS.add_past_smokes] = () => {
    setModalVisible(true)
  }
  return (
    <View style={styles.container}>
      <Text>Smokeless</Text>
      <MyChart data={data}></MyChart>
      <FloatingAction
        actions={actionsOptions}
        onPressItem={name => actions[name]()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button
              // style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              title="Fechar"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});
