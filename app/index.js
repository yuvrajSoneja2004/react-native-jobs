// ! Make sure to import these from 'react-native' and not from 'react-native-web'
import { useState } from 'react';
import {View  , ScrollView , SafeAreaView} from 'react-native';
import { Stack , useRouter } from 'expo-router';


// Pregiven assets from the tutorial
import {COLORS , icons , images, SIZES} from '../constants';
import {Nearbyjobs , Popularjobs ,ScreenHeaderBtn ,Welcome} from '../components';

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1 , backgroundColor: COLORS.lightWhite}}>
            {/* Basically , you can provide some properties to the default navbar like thing in Stack.Screen */}
            {/* ----------------------------- STACK.SCREEN START ----------------------------- */}
            <Stack.Screen
             options={{headerStyle: {backgroundColor: COLORS.lightWhite},
                        headerShadowVisible: false ,
                        headerLeft: () => (
                            <ScreenHeaderBtn  iconUrl={icons.menu} dimension="60%"/>
                        ),
                        headerRight: () => (
                            <ScreenHeaderBtn  iconUrl={images.profile} dimension="100%"/>
                        ),
                        headerTitle: ""
                    }}  />
             {/* ----------------------------- STACK.SCREEN END ----------------------------- */}

            {/* ! View start from here ! */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

// * Also install the following packages
// * npm i expo-font axios react-native-dotenv

// ? expo-cli
// Use npm i -g expo-cli - to install the expo-cli globally
// to start the server - expo-cli start --tunnel