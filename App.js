import React, { Component } from 'react';
import { Text, View } from "react-native";
import { Provider } from 'react-redux';
import Navigator from "./src/navigation/NavigatorStacks";

import reducers from "./src/reducers";

const { persistor, store } = reducers();
const App = () => {
  return (

    <Provider store={store} >

      <Navigator />

    </Provider>


  )
};

export default App;