import React from 'react';
import SlideShow from '../slide-show/SlideShow';
import './MainContent.scss';

const MainContent = () => {
  const images = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQru-E4T1qcmhgUfasl70YjNvDgUsVczPkAvwzGZVHa&s'
    },
    {
      url: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      url: 'https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];
  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} showArrows={false} />
      <div className="grid-movie-title">
        <div className="movie-type">Now playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
