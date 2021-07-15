// Components/FilmItem.js

import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {getImageFromApi} from '../API/TMDBApi';
import FadeIn from '../Animations/FadeIn';

class FilmItem extends React.Component {
    _displayFavoriteImage() {
        if (this.props.isFilmFavorite) {
            return (
                <Image
                    style={styles.favorite_image}
                    source={require('../Images/heart_full.png')}
                />
            )
        }
    }

    render() {
        const { film, displayDetailForFilm } = this.props;
        return (
            <FadeIn>
                <TouchableOpacity style={styles.mainContainer}
                      onPress={() => displayDetailForFilm(film.id)}>
                    <Image
                        style={styles.image}
                        source={{uri: getImageFromApi(film.poster_path)}}
                    />
                    <View style={styles.viewContent}>
                        <View style={styles.viewHeader}>
                            {this._displayFavoriteImage()}
                            <Text style={styles.titleText}>{ film.title }</Text>
                            <Text style={styles.voteText}>{film.vote_average}</Text>
                        </View>
                        <View style={styles.viewDescription}>
                            <Text style={styles.descriptionText} numberOfLines={6}>{film.overview}</Text>
                        </View>
                        <View style={styles.viewDate}>
                            <Text style={styles.dateText}>Sorti le {film.release_date}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </FadeIn>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 190,
        flexDirection: 'row',
        flex: 1
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },

    viewContent: {
        flexDirection: 'column',
        flex: 1,
        margin: 5
    },

    viewHeader: {
        flex: 3,
        flexDirection: 'row'
    },
    favorite_image: {
        width: 24,
        height: 24,
        marginRight: 5
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    voteText: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },

    viewDescription: {
        flex: 7
    },
    descriptionText: {
        fontStyle: 'italic',
        color: '#666666'
    },

    viewDate: {
        flex: 1
    },
    dateText: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default FilmItem
