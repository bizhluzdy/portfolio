import AppController from '../controller/controller';
import AppView from '../view/appView';
import { SourceItem } from '../view/sources/sources';
import { NewsItem } from '../view/news/news';

class App {
  private controller: AppController;

  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    document
      .querySelector('.sources')
      ?.addEventListener('click', (e) =>
        this.controller.getNews(e, (data: unknown) => this.view.drawNews(data as { articles?: NewsItem[] })),
      );
    this.controller.getSources((data: unknown) => this.view.drawSources(data as { sources?: SourceItem[] }));
  }
}

export default App;
