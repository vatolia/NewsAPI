/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NewsService {
  private readonly apiKey = '3b96ace51c2a439eaa2a75649866a31a';
  private readonly apiUrl = 'http://newsapi.org/v2/top-headlines';

  async getNews() {

    try {

      const response = await axios.get(this.apiUrl, {

        params: {

          apiKey: this.apiKey,

          country: 'us',

        },

      });

      return response.data.articles;

    } catch (error) {

      console.error('Error fetching news:', error);

      return [];

    }

  }
}

    

