import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPlayList3PlayerTelevisionDisplayMoviesSmartphoneMediaTvPlayersScreenVideoIcon],svg[streamline-entertainment-play-list-3-player-television-display-movies-smartphone-media-tv-players-screen-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8.5" height="13" x="2.75" y=".5" rx="1"></svg:rect><svg:path d="M5.27 7.14V3.82a.31.31 0 0 1 .47-.28l2.85 1.67a.31.31 0 0 1 0 .54L5.74 7.41a.31.31 0 0 1-.47-.27ZM2.75 10.5h8.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentPlayList3PlayerTelevisionDisplayMoviesSmartphoneMediaTvPlayersScreenVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
