import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPreviousButtonTelevisionButtonsMoviesSkipPreviousVideoControlsIcon],svg[streamline-entertainment-control-button-previous-button-television-buttons-movies-skip-previous-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5v13m13-1.84a1 1 0 0 1-.52.88a1 1 0 0 1-1 0l-7.19-4.7a1 1 0 0 1 0-1.68L12 1.5a1 1 0 0 1 1 0a1 1 0 0 1 .52.88Z"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPreviousButtonTelevisionButtonsMoviesSkipPreviousVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
