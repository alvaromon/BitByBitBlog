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

  constructor(private _blogDataService: BlogDataService) {
   }

  ngOnInit() {
    const blogData = this._blogDataService.getBlogData();

    this._blogDataService.getBlogData().forEach(element => {
      this.previews.push(new BlogPreviewComponent(element.imgURL, element.title, element.summary));
    });

    this._blogDataService.getBlogData().forEach(element => {
      this.previews.push(new BlogPreviewComponent(element.imgURL, element.title, element.summary));
    });

    console.log(blogData);
  }
}
