import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { BlogData } from '../interfaces/index';

@Injectable({
    providedIn: 'root'
})
export class BlogDataService {

    public _previews: BlogData[] = [];

    constructor(private _http: HttpClient) {}

    public getBlogData(): BlogData[]{
        const blogData: BlogData[] = [];

        this._http.get('../../assets/BlogData/testblog1.txt', {responseType: 'text'}).
        subscribe(data => blogData.push(this.fileDataToObj(data)));

        this._http.get('../../assets/BlogData/testblog2.txt', {responseType: 'text'}).
        subscribe(data => blogData.push(this.fileDataToObj(data)));

        this._previews = blogData;

        return blogData;
    }

    private fileDataToObj(data: string): BlogData {
        let obj: BlogData;

        const fileData: string[] = data.split('\n');

        obj = { imgURL: fileData[0], title: fileData[1], summary: fileData[2], blogText: fileData[3] };

        return obj;
    }
}
