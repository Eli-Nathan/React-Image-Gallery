import React, {Component} from 'react';

class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false
    }
  }

  onClick = (key) => {
    const images = this.props.images
    this.setState({
      activeImage: key,
      showLightbox: true
    })
  }

  onClose = () => {
    this.setState({
      showLightbox: false
    })
  }

  renderImages = () => {
    const cleanedImages = this.props.images.slice(0, 7)
    const amount = cleanedImages.length
    const images = cleanedImages.map((image, i) => {
      if(amount == i + 1) {
        return (
          <div
            key={i}
            className="col-12 col-sm-4 mb-4 mb-sm-4"
            onClick={e => this.onClick(i)}
          >
            <img
              src={image.path}
              alt={image.alt}
              className="img-fluid gallery-image"
            />
          </div>
        )
      }
      else if((amount - 1) == i + 1) {
        return (
          <div
            key={i}
            className="col-6 col-sm-4 mb-4 mb-sm-4"
            onClick={e => this.onClick(i)}
          >
            <img
              src={image.path}
              alt={image.alt}
              className="img-fluid gallery-image"
            />
          </div>
        )
      }
      else if((amount - 2) == i + 1) {
        return (
          <div
            key={i}
            className="col-6 col-sm-4 mb-4 mb-sm-4"
            onClick={e => this.onClick(i)}
          >
            <img
              src={image.path}
              alt={image.alt}
              className="img-fluid gallery-image"
            />
          </div>
        )
      }
      else {
        return (
          <div
            key={i}
            className="col-6 col-sm-3 mb-4 mb-sm-4"
            onClick={e => this.onClick(i)}
          >
            <img
              src={image.path}
              alt={image.alt}
              className="img-fluid gallery-image"
            />
          </div>
        )
      }
    })
    return images
  }

  renderImage = () => {
    return (
      <img
        src={this.props.images[this.state.activeImage].path}
        className="img-fluid featuredImage"
      />
    )
  }

  renderNavigation = () => {
    return (
      <p>Arrows</p>
    )
  }

  renderThumbnails = () => {
    return (
      <p>Thumbnails</p>
    )
  }

  renderLightbox = () => {
    const lightbox = (
      <div className={`lightbox ${this.state.showLightbox ? "lightbox--visible" : ""}`}>
        <button
          className="float-right close-button"
          onClick={e => this.onClose(e)}
        />
        {this.renderImage()}
        {this.renderNavigation()}
        {this.renderThumbnails()}
      </div>
    )
    return lightbox
  }

  render() {
    return (
      <div className="row">
        {this.renderImages()}
        {this.state.showLightbox ? this.renderLightbox() : null}
      </div>
    );
  }

}

export default ImageGallery
