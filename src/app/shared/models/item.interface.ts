export interface ItemId {
  kind: string;
  videoId: string;
}

export interface ItemSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: ItemThumbnailTypes;
  title: string;
}

export interface ItemThumbnailTypes {
  default: ItemThumbnailParams;
  high: ItemThumbnailParams;
  medium: ItemThumbnailParams;
}

export interface ItemThumbnailParams {
  height: number;
  url: string;
  width: number;
}
