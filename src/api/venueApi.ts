import axios from 'axios';

export interface WebSettings {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}

export interface RestaurantDetails {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: WebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
}

const API_URL = 'https://cors-anywhere.herokuapp.com/https://cdn-dev.preoday.com/challenge/venue/9';

export const fetchRestaurantDetails = async (): Promise<RestaurantDetails> => {
  try {
    const response = await axios.get<RestaurantDetails>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant details:', error);
    throw new Error('Failed to fetch restaurant details');
  }
};

