/**
 * @format
 */

// import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
// import App from './src/App';
import App from './Routing/App';
// import App from './Routing2/App';
import {name as appName} from './app.json';
// import {playbackService} from './musicPlayerServices';

AppRegistry.registerComponent(appName, () => App);
// TrackPlayer.registerPlaybackService(() => playbackService);
