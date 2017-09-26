import React, { Component } from 'react';
import FlatList from './flat_list';

const App = (props) => {
  return(
    <div className="flat-list">
      <FlatList/ >
    </div>
  )}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}

export default App;


























// const Component = React.Component;
// import SearchBar from './search_bar';
// import Gif from './gif';
// import GifList from './gif_list';

// const API_KEY = 'a4cba98d703e4155862c3b275873082a';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       gifs: [],
//       giphyId: 'xT9IgDEI1iZyb2wqo8'
//     };

//     this.searchGifs('homer thinking');
//   }

//   searchGifs = (term) => {
//     giphy(API_KEY).search(term, (err, response) => {
//       if (response && response.data && response.data.length > 0) {
//         this.setState({
//           gifs: response.data.slice(0, 10).map(gif => ({ giphyId: gif.id }))
//         });
//       }
//     });
//   }

//   selectGif = (giphyId) => {
//     this.setState({ giphyId: giphyId });
//   }

//   render() {
//     return (
//       <div>
//         <div className="main-scene">
//           <SearchBar onQueryChange={this.searchGifs} />
//           <div className="main-frame">
//             <Gif giphyId={this.state.giphyId} />
//           </div>
//         </div>
//         <div className="list-container">
//           <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
//         </div>
//       </div>
//     );
//   }
// }

