import News, { NewsItem } from './news/news';
import Sources, { SourceItem } from './sources/sources';

class AppView {
  private news: News;

  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data?: { articles?: NewsItem[] }): void {
    const values: NewsItem[] = data?.articles || [];
    this.news.draw(values);
  }

  public drawSources(data?: { sources?: SourceItem[] }): void {
    const values: SourceItem[] = data?.sources || [];
    this.sources.draw(values);
  }
}

export default AppView;
