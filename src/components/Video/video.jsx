import React, { Component } from 'react';
import Modal from './modal';

import Thumbnail from './bandphoto.jpeg';
import PlayIcon from '-!babel!svg-react-loader?name=Arrow!./play-outline.svg';


class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {

    const style = {
      backgroundImage: 'url(https://img.youtube.com/vi/' + this.props.youtubeID + '/maxresdefault.jpg)'
    };

    const youtubeSrc = 'https://www.youtube.com/embed/' + this.props.youtubeID;

    return (
      <div className={this.props.className}>
        <Modal show={this.state.show} handleClose={this.hideModal}>
            <iframe
              width="560"
              height="315"
              src={youtubeSrc}
              frameBorder="0"
              allowFullScreen>
            </iframe>
        </Modal>

        <div
          className="video-thumbnail"
          style={style}
          onClick={this.showModal}>
          <div className="video-thumbnail__wrapper">
            <PlayIcon
              className="video-thumbnail__icon"
              fill="#ffffff"
              />
          </div>
        </div>
      </div>
    )
  }
}

export default Video;