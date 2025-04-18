import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPause2ButtonTelevisionButtonsMoviesTvPauseVideoControlsIcon],svg[streamline-entertainment-control-button-pause-2-button-television-buttons-movies-tv-pause-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="4.5" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:rect width="4.5" height="13" x="9" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPause2ButtonTelevisionButtonsMoviesTvPauseVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
