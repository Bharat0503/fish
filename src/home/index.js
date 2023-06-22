import React, { Component, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import Header from '../components/header';
import { generateFontSize, getHeight, getWidth } from '../config/config';
const AllFilms = require('../jsons/AllFilms.json');
console.log("AAL", AllFilms.data.allFilms.films)



const Home = (props) => {

    const [selectItem, setSelectItem] = useState()

    const selectitem = (item) => {
        setSelectItem(item)
    }


    const allFilmsList = ({ item }) => (

        <TouchableOpacity onPress={() => {
            selectitem(item)
        }} style={{ borderRadius: getWidth(2), width: getWidth(100), justifyContent: (item.id == selectItem?.id) ? 'flex-start' : 'center', alignItems: 'flex-start', backgroundColor: 'pink', marginVertical: getHeight(2), paddingVertical: getHeight(2) }}>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: (item.id == selectItem?.id) ? getHeight(2) : 0, marginHorizontal: getWidth(2), width: getWidth(96) }}>
                <Text style={{ color: 'black', fontSize: generateFontSize(20) }}>{item.title}</Text>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Details', { id: item.id })
                }} style={{ marginVertical: getHeight(2), marginHorizontal: getWidth(2), backgroundColor: 'gray', padding: getHeight(1), borderRadius: getWidth(1) }}>
                    <Text style={{ color: 'black', fontSize: generateFontSize(20) }}>Details</Text>
                </TouchableOpacity>
            </View>

            {
                item.id == selectItem?.id
                    ?
                    <View style={{}}>
                        <Text style={{ marginBottom: getHeight(1), marginHorizontal: getWidth(2), color: 'black', fontSize: generateFontSize(17) }}>Species:</Text>
                        {

                            selectItem?.speciesConnection?.species.map((item, index) => {
                                return (
                                    <View style={{ height: getHeight(2), }}>
                                        <Text style={{ marginHorizontal: getWidth(2), color: 'green', fontSize: generateFontSize(15) }}>{item?.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>


                    :
                    null
            }
        </TouchableOpacity >
    );



    return (
        <View style={{ flex: 1, }}>
            <Header title={'All Filmes'} />

            <FlatList
                data={AllFilms.data.allFilms.films}
                renderItem={allFilmsList}
                keyExtractor={item => item.id}
            />

        </View>
    )
};

export default Home;