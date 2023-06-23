import './news.css';

export interface NewsItem {
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: {
    name: string;
  };
}

class News {
  public draw(data: NewsItem[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
      if (idx % 2) {
        const newsItem = newsClone.querySelector('.news__item');
        if (newsItem instanceof HTMLElement) {
          newsItem.classList.add('alt');
        }
      }

      const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
      newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
      newsMetaAuthor.textContent = item.author || item.source.name;
      const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
      newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
      newsDescriptionTitle.textContent = item.title;
      const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
      newsDescriptionSource.textContent = item.source.name;
      const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
      newsDescriptionContent.textContent = item.description;
      const newsReadMoreLink = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
      newsReadMoreLink.setAttribute('href', item.url);

      fragment.appendChild(newsClone);
    });

    const newsContainer = document.querySelector('.news') as HTMLElement;
    newsContainer.innerHTML = '';
    newsContainer.appendChild(fragment);
  }
}

export default News;
