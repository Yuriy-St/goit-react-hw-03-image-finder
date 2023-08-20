import { ImageGalleryStyled } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ photos }) {
  return (
    <ImageGalleryStyled>
      {photos.map(({ id, webformatURL, tag }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={tag} />
      ))}
    </ImageGalleryStyled>
  );
}
