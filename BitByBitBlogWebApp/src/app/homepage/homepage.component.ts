import { Component, OnInit } from '@angular/core';
import { BlogPreviewComponent } from '../blog-preview/blog-preview.component';
import { BlogData } from '../interfaces';
import { BlogDataService } from '../services/index';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public previews: BlogPreviewComponent[] = [];
  public myArr: BlogData[] = this._blogDataService._previews;

  constructor(private _blogDataService: BlogDataService) {
   }

  ngOnInit() {
    this._blogDataService._previews.forEach(element => {
      this.previews.push(new BlogPreviewComponent(element.imgURL, element.title, element.summary));
    });

    this._blogDataService._previews.forEach(element => {
      this.previews.push(new BlogPreviewComponent(element.imgURL, element.title, element.summary));
    });

    console.log(this.previews);
  }
}
