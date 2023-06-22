import React, { Component, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Header from '../components/header';
import { generateFontSize, getHeight, getWidth } from '../config/config';
const filmDetails = require('../jsons/Details.json');




const Details = (props) => {

    const [selectItem, setSelectItem] = useState()

    console.log("props", props.route.params.id)
    console.log("props1", filmDetails.data.films.details[0].id)





    return (
        <View style={{ flex: 1, }}>
            <Header title={'Details'} />
            {
                filmDetails.data.films.details.map((item, index) => {
                    if (item.id == props.route.params.id) {
                        const [year, month, day] = filmDetails.data.films.details[index].releaseDate.split('-')
                        return (

                            <ScrollView style={{ flex: 1, backgroundColor: 'pink', paddingLeft: getWidth(2) }}>
                                <Text style={{ color: 'black', fontSize: generateFontSize(30), fontWeight: 'bold' }}>{filmDetails.data.films.details[index].title}</Text>
                                <Text style={{ color: 'black', fontSize: generateFontSize(25), fontWeight: 'bold', marginTop: getHeight(1) }}>Director:</Text>
                                <Text style={{ color: 'green', fontSize: generateFontSize(20), fontWeight: '500' }}>{filmDetails.data.films.details[index].director}</Text>
                                <Text style={{ color: 'black', fontSize: generateFontSize(25), fontWeight: 'bold', marginTop: getHeight(1) }}>Producers:</Text>
                                {
                                    filmDetails.data.films.details[index].producers.map((item1, index1) => {
                                        return (
                                            <Text style={{ color: 'green', fontSize: generateFontSize(20), fontWeight: '500' }}>{filmDetails.data.films.details[index].producers[index1]}</Text>
                                        )
                                    })
                                }
                                <Text style={{ color: 'black', fontSize: generateFontSize(25), fontWeight: 'bold', marginTop: getHeight(1) }}>Release Date:</Text>
                                <Text style={{ color: 'green', fontSize: generateFontSize(20), fontWeight: '500' }}>{day + '/' + month + '/' + year}</Text>

                                <Text style={{ color: 'black', fontSize: generateFontSize(25), fontWeight: 'bold', marginTop: getHeight(1) }}>About:</Text>
                                <Text style={{ color: 'green', fontSize: generateFontSize(20), fontWeight: '500', paddingBottom: getHeight(2) }}>{filmDetails.data.films.details[index].openingCrawl}</Text>
                            </ScrollView>
                        )
                    }
                })
            }



        </View >
    )
};

export default Details;