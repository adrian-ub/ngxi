import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPlayButtonTelevisionButtonsMoviesPlayTvVideoControlsIcon],svg[streamline-entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12.35a1.14 1.14 0 0 0 .63 1a1.24 1.24 0 0 0 1.22 0L12 8a1.11 1.11 0 0 0 0-2L3.35.69a1.24 1.24 0 0 0-1.22 0a1.14 1.14 0 0 0-.63 1Z"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPlayButtonTelevisionButtonsMoviesPlayTvVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
