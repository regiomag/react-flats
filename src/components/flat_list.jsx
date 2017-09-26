import React, { Component } from 'react';
import Flat from './flat';
import flats from '../flats';

// console.log(flats);

// flats.forEach(function(flat){
//   console.log(flat.name);
//   console.log(flat.imageUrl);
//   console.log(flat.price);
//   console.log(flat.PriceCurrency);
//   console.log(flat.lat);
// });

const FlatList = (props) => {
  return(
    <div className="flat-list">
      {
        flats.map((flat, i) => <Flat
          key={i+1}
          name= {flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          currency={flat.PriceCurrency}
          lat={flat.lat}
        />)
      }
    </div>
  )}

export default FlatList;
















// const GifList = (props) => {
//   const renderList = () => {
//     return props.gifs.map((gif) => {
//       return <Gif giphyId={gif.giphyId} onListItemClick={props.selectGif} />;
//     });
//   };

//   return (
//     <div className="gif-list">
//       {renderList()}
//     </div>
//   );
// };

