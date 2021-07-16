import React from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {connect} from 'react-redux';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this._avatarClicked = this._avatarClicked.bind(this)
    }

    _avatarClicked() {
        launchCamera({}, (response) => {
            if (response.didCancel) {
                // console.log('cancelled');
            } else if (response.errorCode !== undefined) {
                // console.log(response.errorCode);
            } else if (response.errorMessage) {
                // console.log(response.errorMessage);
            } else if (response.assets) {
                // console.log(response.assets);
                let requireSource = {uri: response.assets[0].uri};
                const action = { type: "SET_AVATAR", value: requireSource }
                this.props.dispatch(action)
            }
        })
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={this._avatarClicked}>
                <Image style={styles.avatar} source={this.props.avatar} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchableOpacity: {
        margin: 5,
        width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2
    }
})

const mapStateToProps = state => {
    return {
        avatar: state.manageAvatar.avatar
    }
}

export default connect(mapStateToProps)(Avatar)
