import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://news-proxy.spanb4.shop/', {
      apiKey: '56a03d0cca9c4fc190f5807a040435a1',
    });
  }
}

export default AppLoader;
