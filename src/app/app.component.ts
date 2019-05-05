
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlightTag } from 'angular-text-input-highlight';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  text = '';
  tags: HighlightTag[] = [];
  hashtag = '';
  ngOnInit(): void {
    this.addTags();
  }

  addTags() {
    this.tags = [];
    const matchHashtags = /(#\S+) ?/g;
    let hashtag;
    while ((hashtag = matchHashtags.exec(this.text))) {
      this.hashtag = hashtag.input.replace( /\n/g, ' ').split( ' ').filter(item => item.match(/^#/g)).join(' ');
      this.tags.push({
        indices: {
          start: hashtag.index,
          end: hashtag.index + hashtag[1].length
        },
        cssClass: 'bg-blue',
        data: hashtag[1]
      });
    }
  }
}
