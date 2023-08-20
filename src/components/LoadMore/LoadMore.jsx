import Loader from 'components/LoadMore/Loader/Loader';
import { LoadMoreContainer } from './LoadMore.styled';
import ButtonLoadMore from 'components/LoadMore/ButtonLoadMore/ButtonLoadMore';

export default function LoadMore({ isLoading, onClick }) {
  return (
    <LoadMoreContainer>
      {isLoading ? <Loader /> : <ButtonLoadMore onClick={onClick} />}
    </LoadMoreContainer>
  );
}
