import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import { BackHandler, ToastAndroid } from 'react-native';
import MainToast from "./components/MainToast";
import MainToastFireBase from "./components/MainToastFireBase";

// styles
import css from './resources/styles/css';

// screens
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import AgreeScreen from './screens/AgreeScreen';
import AgreeTermsScreen from "./screens/AgreeTermsScreen"
import AgreePetScreen from './screens/AgreePetScreen';
import AgreePetImgScreen from "./screens/AgreePetImgScreen"
import AgreePetAddNumScreen from './screens/AgreePetAddNumScreen'
import HomeScreen from './screens/HomeScreen';
import WeightScreen from "./screens/WeightScreen";
import WeightWriteScreen from "./screens/WeightWriteScreen";
import WeightModifyScreen from "./screens/WeightModifyScreen";
import BCSCameraScreen from "./screens/BCSCameraScreen";
import BCSSelectScreen from "./screens/BCSSelectScreen";
import MandIScreen from "./screens/MandIScreen";
import MandIDiagnosisWriteScreen from "./screens/MandIDiagnosisWriteScreen";
import MandIDiagnosisModifyScreen from "./screens/MandIDiagnosisModifyScreen";
import MandIInoculationWriteScreen from "./screens/MandIInoculationWriteScreen";
import MandIInoculationModifyScreen from "./screens/MandIInoculationModifyScreen";
import MandIInoculationSWriteScreen from "./screens/MandIInoculationSWriteScreen";
import MandIInoculationSModifyScreen from "./screens/MandIInoculationSModifyScreen";
import MandIHelminthicWriteScreen from "./screens/MandIHelminthicWriteScreen";
import MandIHelminthicModifyScreen from "./screens/MandIHelminthicModifyScreen";
import HelminthicGuideScreen from "./screens/HelminthicGuideScreen";
import InoculationGuideScreen from "./screens/InoculationGuideScreen";
import MedicalMainScreen from "./screens/MedicalMainScreen";
import MedicalCameraScreen from './screens/MedicalCameraScreen';
import MedicalScreen from './screens/MedicalScreen';
import MedicalRecordListScreen from "./screens/MedicalRecordListScreen";
import EncyclopediaDScreen from "./screens/EncyclopediaDScreen";
import FoodScreen from "./screens/FoodScreen";
import FoodModifyScreen from "./screens/FoodModifyScreen";
import FoodFWriteScreen from "./screens/FoodFWriteScreen";
import FoodRecordListScreen from "./screens/FoodRecordListScreen";
import FoodDScreen from "./screens/FoodDScreen";
import FoodCalculatorScreen from "./screens/FoodCalculatorScreen";
import HospitalScreen from './screens/HospitalScreen';
import HospitalDScreen from './screens/HospitalDScreen';
import HospitalModifyScreen from "./screens/HospitalModifyScreen";
import MyPageScreen from './screens/MyPageScreen';
import MyInfoScreen from "./screens/MyInfoScreen";
import HospitalLikeScreen from "./screens/HospitalLikeScreen";
import WithDrawScreen from "./screens/WithDrawScreen";
import MyPageNoticeScreen from './screens/MyPageNoticeScreen';
import MyPageQNAScreen from './screens/MyPageQNAScreen';
import MyPageQScreen from './screens/MyPageQScreen';
import MyPageNotificationScreen from './screens/MyPageNotificationScreen';
import VersionScreen from "./screens/VersionScreen";
import PetModifyScreen from "./screens/PetModifyScreen";
import PetAddScreen from "./screens/PetAddScreen";
import PetAddNumScreen from "./screens/PetAddNumScreen";
import PetAddImgScreen from "./screens/PetAddImgScreen";
import LocationSearchScreen from './screens/LocationSearchScreen';
import NotificationScreen from "./screens/NotificationScreen";
import MyLocationSearchScreen from './screens/MyLocationSearchScreen'
import MedicalGuideScreen from "./screens/MedicalGuideScreen";
import BCSGuideScreen from "./screens/BCSGuideScreen";
import WeightAndDietScreen from "./screens/WeightAndDietScreen";
import WeightAndDietGuideScreen from "./screens/WeightAndDietGuideScreen"
import WeightGoalWriteScreen from "./screens/WeightGoalWriteScreen";
import WeightRecordListScreen from './screens/WeightRecordListScreen';
import WeightGoalListScreen from "./screens/WeightGoalListScreen";
import DietGuideScreen from "./screens/DietGuideScreen"
import NutrientGuideScreen from "./screens/NutrientGuideScreen";
import ReportListScreen from './screens/ReportListScreen';
import PettmealRandingScreen from "./screens/PettmealRandingScreen";
import PettmealScreen from "./screens/PettmealScreen";
import PettmealInfoWriteScreen from "./screens/PettmealInfoWriteScreen";
import PettmealPaymentInofoScreen from "./screens/PettmealPaymentInofoScreen";
import PettmealLocationScreen from "./screens/PettmealLocationScreen";
import PettmealPaymentSuccessScreen from "./screens/PettmealPaymentSuccessScreen";
import PettmealPaymentfailedScreen from "./screens/PettmealPaymentfailedScreen";
import PettmealPaymentHistoryListScreen from "./screens/PettmealPaymentHistoryListScreen";
import PaymentScreen from './screens/PaymentScreen';
import PaymentResult from './screens/PaymentResult';
import MonthPayScreen from './screens/MonthPayScreen';
import AITranslationScreen from "./screens/AITranslationScreen";
import AITranslationHistoryScreen from "./screens/AITranslationHistoryScreen";
import PaymentMyScreen from "./screens/PaymentMyScreen";
import ChatScreen from "./screens/ChatScreen"
import WalkingScreen from './screens/WalkingScreen';
import WalkingRunningComponent from './components/WalkingRunningComponent'; 


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Stack_Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoadingScreen' options={{ headerTransparent: true, headerShown: false, animationEnabled: false }} component={LoadingScreen} />
            <Stack.Screen name='SignInScreen' options={{ headerTransparent: true, headerShown: false, animationEnabled: true }} component={SignInScreen} />
            <Stack.Screen name='AgreeScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={AgreeScreen} />
            <Stack.Screen name='AgreeTermsScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={AgreeTermsScreen} />
            <Stack.Screen name='AgreePetScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={AgreePetScreen} />
            <Stack.Screen name='AgreePetImgScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={AgreePetImgScreen} />
            <Stack.Screen name='AgreePetAddNumScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={AgreePetAddNumScreen} />
            <Stack.Screen name='HomeScreen' options={{ headerTransparent: true, headerShown: false, animationEnabled: false }} component={HomeScreen} />
            <Stack.Screen name='WeightScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WeightScreen} />
            <Stack.Screen name='WeightWriteScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WeightWriteScreen} />
            <Stack.Screen name='WeightModifyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WeightModifyScreen} />
            <Stack.Screen name='BCSCameraScreen' options={{ headerTransparent: true, headerShown: false, animationEnabled: false }} component={BCSCameraScreen} />
            <Stack.Screen name='BCSSelectScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={BCSSelectScreen} />
            <Stack.Screen name='MandIScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIScreen} />
            <Stack.Screen name='WalkingScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WalkingScreen} />
            <Stack.Screen name='WalkingRunningComponent' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WalkingRunningComponent} />
            <Stack.Screen name='MandIDiagnosisWriteScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIDiagnosisWriteScreen} />
            <Stack.Screen name='MandIDiagnosisModifyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIDiagnosisModifyScreen} />
            <Stack.Screen name='MandIInoculationWriteScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIInoculationWriteScreen} />
            <Stack.Screen name='MandIInoculationModifyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIInoculationModifyScreen} />
            <Stack.Screen name='MandIInoculationSWriteScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIInoculationSWriteScreen} />
            <Stack.Screen name='MandIInoculationSModifyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIInoculationSModifyScreen} />
            <Stack.Screen name='MandIHelminthicWriteScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIHelminthicWriteScreen} />
            <Stack.Screen name='MandIHelminthicModifyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MandIHelminthicModifyScreen} />
            <Stack.Screen name='HelminthicGuideScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={HelminthicGuideScreen} />
            <Stack.Screen name='InoculationGuideScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={InoculationGuideScreen} />
            <Stack.Screen name='MedicalMainScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MedicalMainScreen} />
            <Stack.Screen name='MedicalCameraScreen' options={{ headerTransparent: true, headerShown: false, animationEnabled: false }} component={MedicalCameraScreen} />
            <Stack.Screen name='MedicalScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MedicalScreen} />
            <Stack.Screen name='MedicalRecordListScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MedicalRecordListScreen} />
            <Stack.Screen name='EncyclopediaDScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={EncyclopediaDScreen} />
            <Stack.Screen name='FoodScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={FoodScreen} />
            <Stack.Screen name='FoodModifyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={FoodModifyScreen} />
            <Stack.Screen name='FoodFWriteScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={FoodFWriteScreen} />
            <Stack.Screen name='FoodRecordListScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={FoodRecordListScreen} />
            <Stack.Screen name='FoodDScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={FoodDScreen} />
            <Stack.Screen name='FoodCalculatorScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={FoodCalculatorScreen} />
            <Stack.Screen name='HospitalScreen' options={{ headerTransparent: true, headerShown: false, animationEnabled: false }} component={HospitalScreen} />
            <Stack.Screen name='HospitalDScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={HospitalDScreen} />
            <Stack.Screen name='HospitalModifyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }} component={HospitalModifyScreen} />
            <Stack.Screen name='MyPageScreen' options={{ headerTransparent: true, headerShown: false, animationEnabled: false }} component={MyPageScreen} />
            <Stack.Screen name='MyInfoScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MyInfoScreen} />
            <Stack.Screen name='HospitalLikeScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={HospitalLikeScreen} />
            <Stack.Screen name='WithDrawScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WithDrawScreen} />
            <Stack.Screen name='MyPageNoticeScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MyPageNoticeScreen} />
            <Stack.Screen name='MyPageQNAScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MyPageQNAScreen} />
            <Stack.Screen name='MyPageQScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MyPageQScreen} />
            <Stack.Screen name='MyPageNotificationScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MyPageNotificationScreen} />
            <Stack.Screen name='VersionScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={VersionScreen} />
            <Stack.Screen name='PetModifyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PetModifyScreen} />
            <Stack.Screen name='PetAddScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PetAddScreen} />
            <Stack.Screen name='PetAddNumScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PetAddNumScreen} />
            <Stack.Screen name='PetAddImgScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PetAddImgScreen} />
            <Stack.Screen name='LocationSearchScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }} component={LocationSearchScreen} />
            <Stack.Screen name='NotificationScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }} component={NotificationScreen} />
            <Stack.Screen name='MyLocationSearchScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }} component={MyLocationSearchScreen} />
            <Stack.Screen name='MedicalGuideScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MedicalGuideScreen} />
            <Stack.Screen name='BCSGuideScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={BCSGuideScreen} />
            <Stack.Screen name='WeightAndDietScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WeightAndDietScreen} />
            <Stack.Screen name='WeightAndDietGuideScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WeightAndDietGuideScreen} />
            <Stack.Screen name='WeightGoalWriteScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WeightGoalWriteScreen} />
            <Stack.Screen name='WeightRecordListScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WeightRecordListScreen} />
            <Stack.Screen name='WeightGoalListScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={WeightGoalListScreen} />
            <Stack.Screen name='DietGuideScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={DietGuideScreen} />
            <Stack.Screen name='NutrientGuideScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={NutrientGuideScreen} />
            <Stack.Screen name="ReportListScreen" options={{ title: 'ReportListScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={ReportListScreen} />
            <Stack.Screen name="PettmealRandingScreen" options={{ title: 'PettmealRandingScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PettmealRandingScreen} />
            <Stack.Screen name="PettmealScreen" options={{ title: 'PettmealScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PettmealScreen} />
            <Stack.Screen name="PettmealInfoWriteScreen" options={{ title: 'PettmealInfoWriteScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PettmealInfoWriteScreen} />
            <Stack.Screen name="PettmealPaymentInofoScreen" options={{ title: 'PettmealPaymentInofoScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PettmealPaymentInofoScreen} />
            <Stack.Screen name="PettmealLocationScreen" options={{ title: 'PettmealLocationScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PettmealLocationScreen} />
            <Stack.Screen name="PettmealPaymentSuccessScreen" options={{ title: 'PettmealPaymentSuccessScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PettmealPaymentSuccessScreen} />
            <Stack.Screen name="PettmealPaymentfailedScreen" options={{ title: 'PettmealPaymentfailedScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PettmealPaymentfailedScreen} />
            <Stack.Screen name="PettmealPaymentHistoryListScreen" options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PettmealPaymentHistoryListScreen} />
            <Stack.Screen name="PaymentScreen" options={{ title: 'ReportDetailScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PaymentScreen} />
            <Stack.Screen name="PaymentResult" options={{ title: 'ReportDetailScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PaymentResult} />
            <Stack.Screen name="MonthPayScreen" options={{ title: 'ReportDetailScreen', headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={MonthPayScreen} />
            <Stack.Screen name="AITranslationScreen" options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={AITranslationScreen} />
            <Stack.Screen name="AITranslationHistoryScreen" options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={AITranslationHistoryScreen} />
            <Stack.Screen name='PaymentMyScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PaymentMyScreen} />
            <Stack.Screen name='ChatScreen' options={{ headerTransparent: true, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={ChatScreen} />
        </Stack.Navigator>
    );
}

class App extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    // 이벤트 해제
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    // 이벤트 동작
    handleBackButton = () => {
        // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
        if (this.exitApp === undefined || !this.exitApp) {
            ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
            this.exitApp = true;

            this.timeout = setTimeout(
                () => {
                    this.exitApp = false;
                },
                2000, // 2초
            );
        } else {
            clearTimeout(this.timeout);

            BackHandler.exitApp(); // 앱 종료
        }
        return true;
    };

    render() {
        return (
            <>
                <NavigationContainer>
                    <Drawer.Navigator swipeEnabled={true} gestureEnabled={true} drawerStyle={[css.w_0]}>
                        <Drawer.Screen name='Stack_Navigation' component={Stack_Navigation} />
                    </Drawer.Navigator>
                </NavigationContainer>
                <MainToast />
                <MainToastFireBase />
            </>
        )
    }
}


export default App;
