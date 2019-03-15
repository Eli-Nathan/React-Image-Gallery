import React, {Component} from 'react';

class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false
    }
  }

  onClick = (key) => {
  this.setState({
    activeImage: key,
    showLightbox: true
  })
  // element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

  onClose = () => {
    this.setState({
      showLightbox: false
    })
  }

  changeImage = (calc) => {
    if (this.state.activeImage == 0 && calc == -1) {
      calc = this.props.images.length - 1
    }
    else if (this.state.activeImage == (this.props.images.length -1) && calc == 1) {
      calc = -(this.props.images.length -1)
    }
    this.setState(state => ({
      activeImage: state.activeImage + calc
    }))
  }

  renderImages = () => {
    const cleanedImages = this.props.images.slice(0, 7)
    const amount = cleanedImages.length
    const images = cleanedImages.map((image, i) => {
      if(amount == i + 1) {
        return (
          <div
            key={i+100}
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
        {this.renderCounter()}
        <div className="thumbs mx-auto">
          {this.renderThumbnails()}
        </div>
        {this.renderNavigation()}
      </div>
    )
    return lightbox
  }

  renderImage = () => {
    return (
      <figure className="d-none d-md-block">
        <img
          src={this.props.images[this.state.activeImage].path}
          alt={this.props.images[this.state.activeImage].alt}
          className="featuredImage mt-md-4 mx-md-auto"
        />
        <figcaption className="caption mt-1 mx-auto">{this.props.images[this.state.activeImage].caption}</figcaption>
      </figure>
    )
  }

  renderCounter = () => {
    return (
      <p className="counter d-none d-md-block text-center">
        {`Image ${this.state.activeImage + 1}/${this.props.images.length}`}
      </p>
    )
  }

  renderNavigation = () => {
    return (
      <div className="arrows">
        <button
          className="arrows__left"
          onClick={e => this.changeImage(-1)}
        />
        <button
          className="arrows__right"
          onClick={e => this.changeImage(1)}
        />
      </div>
    )
  }

  renderThumbnails = () => {
    const thumbs = this.props.images.map((image, i) => {
      return (
        <div
          key={i}
          className={`thumb mb-3 d-inline ${i === this.state.activeImage ? " thumb--active" : null}`}
          onClick={e => this.onClick(i)}
        >
          <figure>
            <img
              src={this.props.images[i].path}
              alt={this.props.images[i].alt}
              className="img-fluid mx-auto"
            />
            <figcaption className="caption mt-1 mx-auto d-md-none">{this.props.images[i].caption}</figcaption>
          </figure>
        </div>
      )
    })
    return thumbs
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
