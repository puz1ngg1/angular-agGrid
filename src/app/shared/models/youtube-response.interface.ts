import {ItemId, ItemSnippet} from "./item.interface";

export interface YoutubeResponse {
  etag: string;
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
}

export interface Item {
  etag: string;
  id: ItemId;
  kind: string;
  snippet: ItemSnippet;
}

export interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
