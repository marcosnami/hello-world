import { Component } from '@angular/core';

import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  
  post = {
    postTitle: "Title",
    isFavorite: true
  }

  tweet = {
    body: "....",
    likesCount: 10,
    isLiked: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed!", eventArgs);
  }

}
