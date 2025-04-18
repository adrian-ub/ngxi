import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWebcamVideoOffIcon],svg[streamline-webcam-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m2 2H9a1 1 0 0 1 1 1V5l2.82-1.25a.5.5 0 0 1 .68.47v5.56a.5.5 0 0 1-.68.47L10 9v1M.5 3.5v7a1 1 0 0 0 1 1h7"></svg:path>`,
})
export class StreamlineWebcamVideoOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
