import { Component, OnInit } from '@angular/core';
import { BlogPreviewComponent } from '../blog-preview/blog-preview.component'
import { BlogDataService } from '../services/index'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public previews: BlogPreviewComponent[];

  constructor(private _blogDataService: BlogDataService) { }

  ngOnInit() {
    this._blogDataService.getAllBlogData().subscribe(previews => this.previews = previews);
  }

}
