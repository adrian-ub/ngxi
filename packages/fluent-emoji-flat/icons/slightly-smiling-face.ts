import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSlightlySmilingFaceIcon],svg[fluent-emoji-flat-slightly-smiling-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M10.42 16.224a4.206 4.206 0 1 0 0-8.411a4.206 4.206 0 0 0 0 8.411m11.148.077a4.244 4.244 0 1 0 0-8.489a4.244 4.244 0 0 0 0 8.49"></svg:path><svg:path fill="#402A32" d="M11 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill="#402A32" fill-rule="evenodd" d="M10.4 18.2a1 1 0 0 1 1.4.2c.31.413 1.712 1.6 4.2 1.6s3.89-1.187 4.2-1.6a1 1 0 1 1 1.6 1.2c-.69.92-2.688 2.4-5.8 2.4s-5.11-1.48-5.8-2.4a1 1 0 0 1 .2-1.4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSlightlySmilingFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
