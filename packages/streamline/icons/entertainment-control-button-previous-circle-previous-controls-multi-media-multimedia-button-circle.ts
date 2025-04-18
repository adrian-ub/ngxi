import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPreviousCirclePreviousControlsMultiMediaMultimediaButtonCircleIcon],svg[streamline-entertainment-control-button-previous-circle-previous-controls-multi-media-multimedia-button-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M4.5 5v4m5-4.5L6.5 7l3 2.5v-5z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPreviousCirclePreviousControlsMultiMediaMultimediaButtonCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
