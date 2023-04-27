import React from "react"
import {styles} from './styles'
import { FlatList} from "react-native"
import EventItem from './item'
const EventList =({events, onSelectItem}) => {
const renderItem = ({ item }) => (
    <EventItem item={item} onSelectItem={onSelectItem} />
  );


const keyExtractor = (item) => item.id;

    return (
        <FlatList 
          renderItem={renderItem}
          data={events}
          keyExtractor={keyExtractor}
          alwaysBounceVertical={false}
        />  
    )
}


export default EventList
