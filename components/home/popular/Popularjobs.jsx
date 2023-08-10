import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';

const Popularjobs = () => {
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
     </View>
     {/* Jobs  */}
     <View style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator  size={'large'} color={COLORS.primary}/> 
      ): error ? (
        <Text>Something went wrong.</Text> 
      ):  (<FlatList data={[1,2,3,6]}
      renderItem={({item}) => (
        <PopularJobCard  item={item}/>
      )}

      keyExtractor={item => item}
      contentContainerStyle={{columnGap: SIZES.medium}}
      horizontal
      />)}
     </View>
    </View>
  )
}

export default Popularjobs