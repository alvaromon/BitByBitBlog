import { Component, OnInit, Input } from '@angular/core';
import { BlogData } from '../interfaces/index';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {

  public _previews: BlogData[];

  // need variables here with proper @ to pass data out of the component
  @Input() _imgURL: string;
  @Input() _title: string;
  @Input() _summary: string;

  constructor(imgURL: string, title: string, summary: string) {
    this._imgURL = imgURL;
    this._title = title;
    this._summary = summary;
  }

  ngOnInit() {
  }
}
