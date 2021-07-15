import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import FilmList from './FilmList';

class Historic extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <FilmList
                    films={this.props.historicFilms.reverse()}
                    navigation={this.props.navigation}
                    favoriteList={true}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})

const mapStateToProps = state => {
    return {
        historicFilms: state.manageHistoricFilms.historicFilms
    }
}

export default connect(mapStateToProps)(Historic)
