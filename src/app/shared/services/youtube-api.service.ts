import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {YoutubeResponse} from "../models/youtube-response.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<YoutubeResponse>{
    return this.http.get<YoutubeResponse>(`${environment.YOUTUBE_API}`);
  }
}
