import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRecordingTapeBubbleSquareIcon],svg[streamline-recording-tape-bubble-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"></svg:path><svg:path d="M10 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0h5"></svg:path></svg:g>`,
})
export class StreamlineRecordingTapeBubbleSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
