import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPause1ButtonTelevisionButtonsMoviesTvPauseVideoControlsIcon],svg[streamline-entertainment-control-button-pause-1-button-television-buttons-movies-tv-pause-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75.52v13m4.5-13v13"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPause1ButtonTelevisionButtonsMoviesTvPauseVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
