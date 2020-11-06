import React, { useContext, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import * as themeActions from "../redux/actions/theme.action";
import { useDispatch,useSelector } from "react-redux";
import {
   List, Switch,
} from 'react-native-paper';

export default  ({ navigation }) => {
    const dispatch = useDispatch();
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);
  
    return (
        
        <View style={{ flex: 1 }}>
            <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch value={themeReducer.theme} onValueChange={(val)=>dispatch(themeActions.ToggleTheme(val))} />}
            />
        </View>
    )
}