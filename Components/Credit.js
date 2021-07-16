import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

export interface CreditProps {
    credit: {
        adult: boolean,
        gender: number,
        id: number,
        known_for_department: string,
        name: string,
        original_name: string,
        popularity: number,
        profile_path: string,
        cast_id: number,
        character: string,
        credit_id: string,
        order: number
    }
}

class Credit extends React.Component<CreditProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.cardContainer}>
                    <ImageBackground style={styles.image} source={require('../Images/user.png')} resizeMode={'cover'}>
                        <Image style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/w500/' + this.props.credit.profile_path}} />
                    </ImageBackground>
                    <Text style={styles.text}>{this.props.credit.name}</Text>
                    <Text style={styles.text}>&gt; {this.props.credit.character}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        maxWidth: 150,
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20
    },
    cardContainer: {
        alignItems: 'center',
        margin: 15
    },
    image: {
        width: 120,
        height: 180
    },
    text: {
        position: 'relative',
        top: -25,
        height: 25,
        lineHeight: 25,
        color: '#FFFFFF',
        backgroundColor: '#bbbbbb',
        width: 150,
        textAlign: 'center',
        opacity: 0.8,
        fontWeight: 'bold'
    }
})

export default Credit
