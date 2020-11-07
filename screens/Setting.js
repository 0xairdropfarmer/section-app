import React, { useContext, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import * as themeActions from "../redux/actions/theme.action";
import { useDispatch,useSelector } from "react-redux";
import {
   List, Switch,Card
} from 'react-native-paper';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from "expo-ads-admob";
  import * as admobAction from "../redux/actions/admob.action";
export default  ({ navigation }) => {
    const dispatch = useDispatch();
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);
    const admobReducer = useSelector(({ admobReducer }) => admobReducer);
    React.useEffect(() => {
        if (admobReducer.ad_status) {
          initAdmob().then(() => {
            // loadInterstitial()
            // initRewardAds()
          });
        }
      }, []);
      const initAdmob = async () => {
        await setTestDeviceIDAsync("EMULATOR");
      };
    const initRewardAds = async () => {
        // Display a rewarded ad
        await AdMobRewarded.setAdUnitID("ca-app-pub-2547344479047582/1613609939"); // Test ID, Replace with your-admob-unit-id
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync();
      };

    return (
        
        <View style={{ flex: 1 }}>
                <Card
        style={{
          shadowOffset: { width: 5, height: 5 },
          width: "100%",
          borderRadius: 12,
          alignSelf: "center",
          alignItems:"center",
          marginBottom: 10,
        }}
      >
        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-2547344479047582/1964568575" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
      </Card>
   
            <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch value={themeReducer.theme} onValueChange={(val)=>dispatch(themeActions.ToggleTheme(val))} />}
            />
        </View>
    )
}