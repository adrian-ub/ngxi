import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWebcamSolidIcon],svg[streamline-webcam-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.5 6.52a6.5 6.5 0 1 1 10.954 4.734a8.2 8.2 0 0 1 1.653 1.401a.75.75 0 1 1-1.114 1.005a6.7 6.7 0 0 0-1.864-1.441A6.5 6.5 0 0 1 7 13.02a6.5 6.5 0 0 1-3.129-.801a6.7 6.7 0 0 0-1.864 1.441a.75.75 0 0 1-1.114-1.005a8.2 8.2 0 0 1 1.653-1.4A6.48 6.48 0 0 1 .5 6.52M7 3.27a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m0 2.25a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWebcamSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
