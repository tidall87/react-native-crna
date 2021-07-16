import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Credit from './Credit';
import {getFilmCredits} from '../API/TMDBApi';

class FilmCredits extends React.Component<{film: any}> {
    constructor(props) {
        super(props);
        this.state = {
            credits: []
        }
    }

    loadCredits() {
        getFilmCredits(this.props.film.id)
            .then(data => {
                this.setState({
                    credits: data.cast
                })
            })
    }

    componentDidMount() {
        this.loadCredits()
    }

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    style={styles.list}
                    data={this.state.credits}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <Credit
                            credit={item}
                        />
                    )}
                    numColumns={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    list: {
        flex: 1
    }
})

export default FilmCredits
