import axios from 'axios';
import {
  Quote, Params
} from './types.js';


export class BookmateClient {
  constructor(private readonly cookie: string) {
    if (cookie == null || cookie === '') {
      throw new Error('cookie is required');
    }
  }

  public async getQuotes(params?: Params): Promise<Quote[]> {
    let config = {
      method: 'get',
      url: 'https://bookmate.ru/p/api/v5/profile/quotes',
      headers: {
        cookie: this.cookie
      },
      params: params
    };

    type Output = {
      quotes: Quote[]
    }

    const response = await axios.request<Output>(config).then((response) => response.data);

    return response.quotes;
  }
}
