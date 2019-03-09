import React from 'react'
import ReactDOM from 'react-dom'
import ImageGallery from './components/ImageGallery'

let imageGallery = document.getElementById("image-gallery")

const images = [
  {
    number: 1,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 2,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 3,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 4,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 5,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 6,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 7,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 8,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 9,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  },
  {
    number: 10,
    path: "https://images.unsplash.com/photo-1550851985-f79ef89f3578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    alt: "BMW in the sun",
    caption: "BMW 5-series in a lumber yard"
  }
]

ReactDOM.render( <ImageGallery images={images} />, imageGallery )
