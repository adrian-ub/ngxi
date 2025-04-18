import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTabsFillIcon],svg[ph-tabs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 168a8 8 0 0 1-8 8H8a8 8 0 0 1-7.63-10.4l22.26-74.2A15.89 15.89 0 0 1 38 80h84.1a15.89 15.89 0 0 1 15.32 11.4L158 160h15.3l-22.51-74.85a4 4 0 0 1 3.83-5.15h15.43a16 16 0 0 1 15.32 11.4L206 160h15.3l-22.51-74.85a4 4 0 0 1 3.83-5.15h15.43a16 16 0 0 1 15.32 11.4l22.26 74.18A8.1 8.1 0 0 1 256 168"></svg:path>`,
})
export class PhTabsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
