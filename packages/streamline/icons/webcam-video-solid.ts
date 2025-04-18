import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWebcamVideoSolidIcon],svg[streamline-webcam-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H9a1.5 1.5 0 0 0 1.5-1.5v-.742l2.106.903A1 1 0 0 0 14 9.74V4.259a1 1 0 0 0-1.394-.919l-2.106.903V3.5A1.5 1.5 0 0 0 9 2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWebcamVideoSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
