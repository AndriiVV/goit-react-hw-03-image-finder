const ImageGalleryItem = ({id, imgURL, largeImg }) => (
  <li className="ImageGalleryItem">
    <img src={imgURL} key={id} value={largeImg} alt="" className="ImageGalleryItem-image"/>
  </li>
);

export default ImageGalleryItem;