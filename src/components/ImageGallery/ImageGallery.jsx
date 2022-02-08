import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";


const ImageGallery = ({gallery}) => (
  <ul className="ImageGallery">
    {gallery.map(({id, webformatURL, largeImageURL}) => (
      <ImageGalleryItem id={id} imgURL={webformatURL} largeImg={ largeImageURL}/>

    ))
     
    }
        
  </ul>
);

export default ImageGallery;

