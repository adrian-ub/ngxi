import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPlayList2PlayerTelevisionMoviesSliderMediaTvPlayersVideoIcon],svg[streamline-entertainment-play-list-2-player-television-movies-slider-media-tv-players-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 8.68V5.32c0-.25.23-.4.41-.28l2.45 1.68a.35.35 0 0 1 0 .56L5.91 9c-.18.08-.41-.07-.41-.32Z"></svg:path><svg:rect width="8" height="11" x="3" y="1.5" rx="1"></svg:rect><svg:path d="M.5 3v8m13-8v8"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentPlayList2PlayerTelevisionMoviesSliderMediaTvPlayersVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
