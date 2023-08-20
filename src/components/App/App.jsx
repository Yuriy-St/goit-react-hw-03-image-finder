import { Component } from 'react';
import { Container } from './App.styled';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMore from 'components/LoadMore/LoadMore';
import pixabay from 'API/pixabay';

const DEFAULT_STATE = {
  query: '',
  isLoading: false,
  page: 1,
  isError: false,
};
export default class App extends Component {
  state = {
    ...DEFAULT_STATE,
    photos: [],
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    )
      this.fetchPhotos();
  }

  handleSubmit = query => {
    this.setState({
      ...DEFAULT_STATE,
      photos: [],
      query,
    });
  };

  getNormalizedPhotos = photos => {
    console.log(`Photos`, photos);
    // return [];
    const normPhotos = photos.map(
      ({ id, tags, webformatURL, largeImageURL }) => ({
        id,
        tags,
        webformatURL,
        largeImageURL,
      })
    );

    return normPhotos;
  };

  async fetchPhotos() {
    const { query, page } = this.state;
    const per_page = 12;
    if (!query) return;

    try {
      this.togleIsLoading();

      const {
        data: { hits },
      } = await pixabay({
        q: query,
        page,
        per_page,
      });

      this.setState(prevState => ({
        photos: [...prevState.photos, ...hits],
      }));
    } catch (error) {
      console.error(error.message);
    } finally {
      this.togleIsLoading();
    }
  }

  togleIsLoading() {
    this.setState({ isLoading: !this.state.isLoading });
  }

  pageIncrease = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { photos, isLoading } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmit} />
        {photos.length !== 0 && (
          <>
            <ImageGallery photos={photos} />
          </>
        )}
      </Container>
    );
  }
}
