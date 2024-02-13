import { NavigationContainer } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StackRoutes from './StackRoutes';
import Inicio from '../pages/Inicio';
import Contato from '../pages/Contato';
import Cursos from "../pages/Cursos";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#d3d3d3'

        }
    }} >
          <Tab.Screen
            name='Início'           
            component={Inicio}
            options={{
              headerTintColor: 'red',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#d3d3d3'
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesome5 name='home' color='red' size={size}></FontAwesome5>
            }}}
          />

          <Tab.Screen
          name='Cursos'
          component={Cursos}
          options={{
            headerTintColor: 'red',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#d3d3d3'
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesome5 name='book' color='red' size={size}></FontAwesome5>
            }}}
          />

          <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            headerTintColor: 'red',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#d3d3d3'
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesome5 name='phone-square-alt' color='red' size={size}></FontAwesome5>
            }}}
          />
    

      </Tab.Navigator>
    )
  
    }