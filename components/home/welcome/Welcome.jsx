import React , {useState} from 'react'
import { View, Text , TextInput , TouchableOpacity, Image , FlatList} from 'react-native';

import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants';

const Welcome = () => {
  const router = useRouter()
  const [search , setSearch] = useState("");
  const [activeJobType , setActiveJobType] = useState("Full-Time")

  const jobTypes = ["Full-Time" , "Part-Time" , "Contractor"];
  return (
    <View>


      <View style={styles.container}>
        <Text style={styles.userName}>Hello Yuvraj</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>


      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput  style={styles.searchInput} value={search} onChangeText={(e) => {setSearch(e.target)}} placeholder='What are you looking for?'/>
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image  source={icons.search}  resizeMode='contain' style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        {/* its like map method (flatlist) */}
      <FlatList  
      data={jobTypes}
      renderItem={({item}) => (
       <TouchableOpacity style={styles.tab(activeJobType , item)} onPress={() => {
        setActiveJobType(item);
        router.push(`/search/${item}`)
       }}>
         <Text>{item}</Text>
       </TouchableOpacity>
  )}
      keyExtractor={item => item}
      horizontal
      contentContainerStyle={{columnGap: SIZES.small}}
      />
      </View>
     
    </View>
  )
}

export default Welcome