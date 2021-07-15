import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';
import Favorites from '../Components/Favorites';
import {Image} from 'react-native';
import Historic from '../Components/Historic';

const SearchStackNavigator = createStackNavigator();
const MoviesTabNavigator = createBottomTabNavigator();

function SearchStackNavigation() {
    return (
        <SearchStackNavigator.Navigator>
            <SearchStackNavigator.Screen
                name="Search"
                component={Search}
                options={{
                    title: "Rechercher"
                }} />

            <SearchStackNavigator.Screen
                name="FilmDetail"
                component={FilmDetail}
                options={{
                    title: "Détails du film"
                }} />
        </SearchStackNavigator.Navigator>
    );
}

function FavoritesStackNavigation() {
    return (
        <SearchStackNavigator.Navigator>
            <SearchStackNavigator.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    title: "Favoris"
                }} />

            <SearchStackNavigator.Screen
                name="FilmDetail"
                component={FilmDetail}
                options={{
                    title: "Détails du film"
                }} />
        </SearchStackNavigator.Navigator>
    );
}

function HistoryStackNavigation() {
    return (
        <SearchStackNavigator.Navigator>
            <SearchStackNavigator.Screen
                name="Historic"
                component={Historic}
                options={{
                    title: "Historique"
                }} />
        </SearchStackNavigator.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MoviesTabNavigator.Navigator tabBarOptions={{
                    activeBackgroundColor: '#DDDDDD',
                    inactiveBackgroundColor: '#FFFFFF',
                    showLabel: false,
                    showIcon: true
                }}>
                <MoviesTabNavigator.Screen
                    name={'Search'}
                    component={SearchStackNavigation}
                    options={{
                        title: "Rechercher",
                        tabBarIcon: () => {
                            return <Image style={styles.icon} source={require('../Images/search.png')}/>
                        }
                    }}
                />

                <MoviesTabNavigator.Screen
                    name={'Favorites'}
                    component={FavoritesStackNavigation}
                    options={{
                        title: "Favoris",
                        tabBarIcon: () => {
                            return <Image style={styles.icon} source={require('../Images/heart_full.png')}/>
                        }
                    }}
                />

                <MoviesTabNavigator.Screen
                    name={'Historic'}
                    component={HistoryStackNavigation}
                    options={{
                        title: "Historique",
                        tabBarIcon: () => {
                            return <Image style={styles.icon} source={require('../Images/history.png')}/>
                        }
                    }}
                />
            </MoviesTabNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
