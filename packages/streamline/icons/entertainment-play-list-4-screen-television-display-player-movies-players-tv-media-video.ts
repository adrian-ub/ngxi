import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPlayList4ScreenTelevisionDisplayPlayerMoviesPlayersTvMediaVideoIcon],svg[streamline-entertainment-play-list-4-screen-television-display-player-movies-players-tv-media-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5.23 9.23V4.91a.41.41 0 0 1 .62-.35l3.7 2.15a.41.41 0 0 1 0 .71l-3.7 2.16a.41.41 0 0 1-.62-.35Z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentPlayList4ScreenTelevisionDisplayPlayerMoviesPlayersTvMediaVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
