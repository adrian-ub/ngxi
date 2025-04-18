import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWebcamIcon],svg[streamline-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 12.52a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M10.07 11.68a7.4 7.4 0 0 1 2.48 1.8m-11.1 0a7.4 7.4 0 0 1 2.48-1.8M7 9.52a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M7 7.02a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class StreamlineWebcamIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
