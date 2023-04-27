import React from "react";
import {styles} from './styles'
import {View, Modal, Text, Button,    } from "react-native";




const Modals = ({ animationModal, modoDeVisibilidad, eventoSeleccionado, canceler, deleter  }) => {
    return ( 

    <Modal visible={modoDeVisibilidad} animationType= {animationModal}>
        <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Event Detail</Text>
        <View style={styles.modalDetailContainer}>
        <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
        <Text style={styles.selectedEvent}>{eventoSeleccionado?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button title='Cancel' color='#254210' onPress={canceler}/>
        <Button title='Delete' color='#254210' onPress={() => deleter(eventoSeleccionado.id)}/>
        </View>
        </View>
     </Modal>




    )  
}

export default Modals;