class Loader {
  public baseLink: string;

  public options: Record<string, string>;

  constructor(baseLink: string, options: Record<string, string>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options = {} }: { endpoint: string; options?: Record<string, string> },
    callback: (data: unknown) => void = (): void => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  public errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.error(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  public makeUrl(options: Record<string, string>, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  public load(
    method: string,
    endpoint: string,
    callback: (data: unknown) => void,
    options: Record<string, string> = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
