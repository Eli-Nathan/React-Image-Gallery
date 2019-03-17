import React, {Component} from 'react';

class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false
    }
  }

  // Handle Keydown function with event parameter
  handleKeyDown = (event) => {
    // If the lightbox is showing
    if(this.state.showLightbox) {
      // Define buttons and keycodes
      let lastArrow = document.querySelector(".lightbox .arrows .arrows__right")
      let closeIcon = document.querySelector(".lightbox .close-button")
      let TAB = 9
      let ESCAPE_KEY = 27
      let LEFT_ARROW = 37
      let RIGHT_ARROW = 39
      // If esc is clicked, call the close function
      if(event.keyCode == ESCAPE_KEY) this.onClose()
      // If left arrow is clicked, call the changeImage function
      if(event.keyCode == LEFT_ARROW) this.changeImage(-1)
      // If left arrow is clicked, call the changeImage function
      if(event.keyCode == RIGHT_ARROW) this.changeImage(1)
      // If tab is clicked, keep focus on the arrows
      if(event.keyCode == TAB && document.activeElement == lastArrow) {
        closeIcon.focus()
      }
    }
  }

  // onClick function
  onClick = (e, key) => {
    // Prevent default action (href="#")
    e.preventDefault()
    /*
      Set state:
        activeImage = the image's index in the array of images
        showLightbox = true
      Callback:
        - Get left arrow button and focus on it
        - Add no scroll class to body
        - Call scrollToThumb function
    */
    this.setState({
      activeImage: key,
      showLightbox: true
    }, () => {
      document.querySelector(".lightbox .arrows .arrows__left").focus()
      document.body.classList.add("no-scroll")
      this.scrollToThumb()
    })
  }

  // onClose function
  onClose = () => {
    /*
      Set state:
        showLightbox = false
      Callback:
        - Remove no scroll class from body
    */
    this.setState({
      showLightbox: false
    }, () => document.body.classList.remove("no-scroll"))
  }

  // changeImage function
  changeImage = (calc) => {
    // If first image is active and parameter is -1
    if (this.state.activeImage == 0 && calc == -1) {
      // set parameter to the length of the array to go right to the last image
      calc = this.props.images.length - 1
    }
    // If last image is active and parameter is 1
    else if (this.state.activeImage == (this.props.images.length -1) && calc == 1) {
      // set parameter to the (negative)length of the array to go right to the first image
      calc = -(this.props.images.length -1)
    }
    /*
      Set state:
        activeImage = selected image + or - calc amount
      Callback:
        - Call scrollToThumb function
    */
    this.setState(state => ({
      activeImage: state.activeImage + calc
    }), () => this.scrollToThumb())
  }

  // scrollToThumb function
  scrollToThumb = () => {
    /* Define variables for:
      - Thumbs div
      - First thumbnail div
      - Active thumbnail div
      - X-axis offset of first div
    */
    let thumbs = document.querySelector(".thumbs")
    let firstThumb = document.querySelectorAll(".thumb")[0]
    let activeThumb = document.querySelector(".thumb--active")
    let firstOffset = firstThumb.offsetLeft
    // Set the scroll position to show the selected thumb with some space to the left (200px)
    thumbs.scrollLeft = activeThumb.offsetLeft - firstOffset - 200
  }

  renderImages = () => {
    const cleanedImages = this.props.images.slice(0, 7)
    const amount = cleanedImages.length
    const images = cleanedImages.map((image, i) => {
      if(amount == i + 1) {
        return (
          <a
            href="#"
            key={i+100}
            className="col-12 col-sm-4 mb-4 mb-sm-4"
            onClick={e => this.onClick(e, i)}
          >
            <img
              src={image.path}
              alt={image.alt}
              className="img-fluid gallery-image"
            />
          </a>
        )
      }
      else if((amount - 1) == i + 1) {
        return (
          <a
            href="#"
            key={i}
            className="col-6 col-sm-4 mb-4 mb-sm-4"
            onClick={e => this.onClick(e, i)}
          >
            <img
              src={image.path}
              alt={image.alt}
              className="img-fluid gallery-image"
            />
          </a>
        )
      }
      else if((amount - 2) == i + 1) {
        return (
          <a
            href="#"
            key={i}
            className="col-6 col-sm-4 mb-4 mb-sm-4"
            onClick={e => this.onClick(e, i)}
          >
            <img
              src={image.path}
              alt={image.alt}
              className="img-fluid gallery-image"
            />
          </a>
        )
      }
      else {
        return (
          <a
            href="#"
            key={i}
            className="col-6 col-sm-3 mb-4 mb-sm-4"
            onClick={e => this.onClick(e, i)}
          >
            <img
              src={image.path}
              alt={image.alt}
              className="img-fluid gallery-image"
            />
          </a>
        )
      }
    })
    return images
  }

  renderLightbox = () => {
    // Listen for keydown event and call function
    document.addEventListener("keydown", this.handleKeyDown)
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
      <figure className="d-none d-md-block text-center">
        <img
          src={this.props.images[this.state.activeImage].path}
          alt={this.props.images[this.state.activeImage].alt}
          className="featuredImage mt-md-4 mx-md-auto text-center"
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
          className={`thumb mb-3 mb-md-0 ${i === this.state.activeImage ? " thumb--active" : ""}`}
          onClick={e => this.onClick(e, i)}
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
