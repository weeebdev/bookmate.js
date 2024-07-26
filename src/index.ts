import axios from 'axios';
import {
  Quote
} from './types.js';

export class BookmateClient {
  constructor(private readonly cookie: string) {
    if (cookie == null || cookie === '') {
      throw new Error('cookie is required');
    }
  }

  public async getQuotes(): Promise<Quote[]> {
    let config = {
      method: 'get',
      url: 'https://bookmate.ru/p/api/v5/profile/quotes',
      headers: {
        cookie: this.cookie
      }
    };


    type Output = {
      quotes: Quote[]
    }

    const response = await axios.request<Output>(config).then((response) => response.data);

    return response.quotes;
  }
}
