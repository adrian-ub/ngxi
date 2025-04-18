import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWebcamVideoCircleSolidIcon],svg[streamline-webcam-video-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m8.616-1.077l1.519-.673a.27.27 0 0 1 .366.253v2.994a.27.27 0 0 1-.366.254l-1.52-.674v.808a.54.54 0 0 1-.538.539h-4.04a.54.54 0 0 1-.538-.539v-3.77a.54.54 0 0 1 .539-.539h4.04a.54.54 0 0 1 .538.539z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWebcamVideoCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
