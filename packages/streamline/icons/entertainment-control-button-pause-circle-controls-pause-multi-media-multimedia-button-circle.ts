import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPauseCircleControlsPauseMultiMediaMultimediaButtonCircleIcon],svg[streamline-entertainment-control-button-pause-circle-controls-pause-multi-media-multimedia-button-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M5.5 4.5v5m3-5v5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPauseCircleControlsPauseMultiMediaMultimediaButtonCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
