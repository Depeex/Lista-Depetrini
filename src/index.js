import { useState } from 'react';
import { Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import { Input, Modals, EventList } from './components/index';




export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText('');
  }

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find(event => event.id === id);
    setSelectedEvent(selectedEvent);
  }

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  }

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalVisible(!modalVisible);
  }

  return (
    
    <View style={styles.container}>
        <Input 
        buttonColor='#254210'
        buttonTitle='Add'
        onChangeText={(text) => setText(text)}
        onHandlerButton={onAddEvent}
        placeholder='Place your event' 
        value={text}
      />
      
      <EventList events = {events} onSelectItem={onHandlerEvent}/>

      <Modals modoDeVisibilidad={modalVisible} 
        animationModal='slide' 
        canceler={onHandlerCancelModal} 
        deleter={onHandlerDeleteEvent} 
        eventoSeleccionado={selectedEvent}/>
      


    </View>
  );
}



