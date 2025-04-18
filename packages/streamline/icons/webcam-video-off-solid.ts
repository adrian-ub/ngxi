import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWebcamVideoOffSolidIcon],svg[streamline-webcam-video-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.22 1.28A.75.75 0 0 1 1.28.22L3.06 2H9a1.5 1.5 0 0 1 1.5 1.5v.742l2.106-.903A1 1 0 0 1 14 4.26v5.483a1 1 0 0 1-1.394.919l-1.548-.664l2.722 2.723a.75.75 0 1 1-1.06 1.06zM0 3.5q.002-.302.11-.563l9.054 9.054A2 2 0 0 1 9 12H1.5A1.5 1.5 0 0 1 0 10.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWebcamVideoOffSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
