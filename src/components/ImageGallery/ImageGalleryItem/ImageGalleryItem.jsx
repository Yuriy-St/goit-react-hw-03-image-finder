import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ src, alt }) {
  return (
    <ImageGalleryItemStyled>
      <img src={src} alt={alt} />
    </ImageGalleryItemStyled>
  );
}
