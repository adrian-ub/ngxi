import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIslamIcon],svg[streamline-islam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.21 7a5.5 5.5 0 0 1 5.47-5.5a6.5 6.5 0 1 0 0 11A5.5 5.5 0 0 1 5.21 7"></svg:path><svg:path d="m10.57 4.04l.91 1.81h1.81l-1.36 1.4l.43 2l-1.79-1l-1.71 1l.36-2l-1.36-1.4h1.81z"></svg:path></svg:g>`,
})
export class StreamlineIslamIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
