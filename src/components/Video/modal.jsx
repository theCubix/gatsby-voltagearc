import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div>
      <CSSTransitionGroup
        transitionName="video-modal--fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        { show ?
          <div className="video-modal" onClick={handleClose}>
            <div className="video__content container">
              {children}
              <p onClick={handleClose} className="text">Close</p>
            </div>
          </div>
        : null }
      </CSSTransitionGroup>
    </div>
  )
};

export default Modal;