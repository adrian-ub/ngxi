import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonStopCircleStopControlsMultiMediaMultimediaButtonCircleIcon],svg[streamline-entertainment-control-button-stop-circle-stop-controls-multi-media-multimedia-button-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:rect width="5" height="5" x="4.5" y="4.5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineEntertainmentControlButtonStopCircleStopControlsMultiMediaMultimediaButtonCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
