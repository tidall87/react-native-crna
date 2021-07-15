import React from 'react';
import YouTube from 'react-native-youtube';
import {StyleSheet, View} from 'react-native';
import {getFilmVideoFromApi} from '../API/TMDBApi';

export interface FilmVideoProps {
    film: any
}

class FilmVideo extends React.Component<FilmVideoProps> {
    constructor(props) {
        super(props);
        this.state = {
            uri: undefined,
            videoId: '',
            videoSite: ''
        }
    }

    _displayVideo() {
        const {uri} = this.state
        if (uri !== undefined && uri !== null) {
            return (
                <YouTube
                    videoId={this.state.videoId}
                    style={styles.video_player}
                    resizeMode={'contain'}
                    play={true}
                    apiKey={'AIzaSyDN8v-OZWeiYla_-aJV0PqpI1Ub0U8nvGY'}/>
            )
        }
    }

    componentDidMount() {
        getFilmVideoFromApi(this.props.film.id)
            .then(data => {
                if (data?.success === false) {

                } else {
                    const video = data.results[0];
                    let uri = undefined
                    switch (video.site) {
                        case 'YouTube':
                            uri = 'https://www.youtube.com/watch?v=' + video.key
                            break;
                        case 'Vimeo':
                            uri = 'https://vimeo.com/' + video.key
                            break;
                    }

                    this.setState({
                        uri: uri,
                        videoId: video.key,
                        videoSite: video.site
                    })
                }
            })
    }

    render() {
        return (
            <View style={styles.main_container}>
                {this._displayVideo()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        alignItems: 'center',
        flex: 1
    },
    video_player: {
        alignSelf: 'stretch',
        height: 200
    }
})

export default FilmVideo
