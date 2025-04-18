import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPlayList1ScreenTelevisionDisplayPlayerMoviesMovieTvMediaPlayersVideoIcon],svg[streamline-entertainment-play-list-1-screen-television-display-player-movies-movie-tv-media-players-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5.49 10.56V6.73A.36.36 0 0 1 6 6.42l3.32 1.91a.37.37 0 0 1 0 .63L6 10.88a.37.37 0 0 1-.51-.32ZM.5 4h13M4 4L5.5.5m3 3.5L10 .5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentPlayList1ScreenTelevisionDisplayPlayerMoviesMovieTvMediaPlayersVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
