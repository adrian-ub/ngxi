import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPlayPauseButtonTelevisionButtonsMoviesPlayPauseVideoControlsIcon],svg[streamline-entertainment-control-button-play-pause-button-television-buttons-movies-play-pause-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5v9m-3-9v9m-10-1.21a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62Z"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPlayPauseButtonTelevisionButtonsMoviesPlayPauseVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
