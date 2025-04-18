import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRecordingTapeBubbleCircleIcon],svg[streamline-recording-tape-bubble-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0h5"></svg:path><svg:path d="M4.145 12.84a6.5 6.5 0 1 0-2.556-2.238m2.556 2.239L.5 13.5l1.089-2.897m2.556 2.238l.005-.001m-2.561-2.237l.001-.003"></svg:path></svg:g>`,
})
export class StreamlineRecordingTapeBubbleCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
