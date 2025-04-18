import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPageFirstIcon],svg[carbon-page-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16L24 6l1.4 1.4l-8.6 8.6l8.6 8.6L24 26zM8 4h2v24H8z"></svg:path>`,
})
export class CarbonPageFirstIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
