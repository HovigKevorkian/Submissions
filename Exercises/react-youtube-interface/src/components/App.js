import React from 'react';
import '../style/App.css';
import SearchBar from './SearchBar';
import YouTubeApi from '../apis/YouTubeApi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  handleSubmit = async termFromSearchBar => {
    const response = await YouTubeApi.get('/search', {
      params: {
        q: termFromSearchBar
      }
    });
    this.setState({
      videos: response.data.items
    });
    this.handleVideoSelect(response.data.items[0]);
  };

  handleVideoSelect = async video => {
    const response = await YouTubeApi.get('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: video.id.videoId
      }
    });

    this.setState({
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className='wrapper'>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className='sub-wrapper'>
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className='five wide column'>
                <VideoList
                  handleVideoSelect={this.handleVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
