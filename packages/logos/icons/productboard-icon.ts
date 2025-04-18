import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosProductboardIconIcon],svg[logos-productboard-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF2638" d="m85.327 83.997l85.327 83.996H0z"></svg:path><svg:path fill="#FFC600" d="m0 0l85.327 83.997L170.654 0z"></svg:path><svg:path fill="#0079F2" d="m85.341 83.997l85.327 83.996l85.327-83.996L170.668 0z"></svg:path>`,
})
export class LogosProductboardIconIcon {
  readonly viewBox = input("0 0 256 168")
  readonly width = input("1.53em")
  readonly height = input("1em")
}
