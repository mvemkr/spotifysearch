import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpotifyService {
    private searchUrl:string;
    private artistUrl:string;

    constructor(private _http:Http){

    }

    searchMusic(str:string, type='artist') {
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl).map(res => res.json());
    }

    getArtist(id:string) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl).map(res => res.json());
    }
}