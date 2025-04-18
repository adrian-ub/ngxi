import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonStopButtonTelevisionButtonsMoviesStopTvVideoControlsIcon],svg[streamline-entertainment-control-button-stop-button-television-buttons-movies-stop-tv-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="13" x=".5" y=".52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect>`,
})
export class StreamlineEntertainmentControlButtonStopButtonTelevisionButtonsMoviesStopTvVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
