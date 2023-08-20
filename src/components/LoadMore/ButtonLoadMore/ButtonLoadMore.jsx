import { ButtonLoadMoreStyled } from './ButtonLoadMore.styled';

export default function ButtonLoadMore({ onClick }) {
  return (
    <ButtonLoadMoreStyled type="button" onClick={() => onClick()}>
      Load more...
    </ButtonLoadMoreStyled>
  );
}
