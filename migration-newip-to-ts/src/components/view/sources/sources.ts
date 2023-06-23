import './sources.css';

export interface SourceItem {
  id: string;
  name: string;
}

class Sources {
  public draw(this: Sources, data: SourceItem[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

      const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
      sourceItemName.textContent = item.name;

      const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.appendChild(sourceClone);
    });

    const sourcesContainer = document.querySelector('.sources') as HTMLElement;
    sourcesContainer.appendChild(fragment);
  }
}

export default Sources;
