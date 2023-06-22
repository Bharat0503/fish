import React, { Component } from 'react';
import { Text, View } from "react-native";
import { generateFontSize, getHeight } from '../config/config';




const Header = (props) => {
    return (
        <View style={{ height: getHeight(7), backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: generateFontSize(20) }}>
                {props.title}
            </Text>

        </View>
    )
};

export default Header;