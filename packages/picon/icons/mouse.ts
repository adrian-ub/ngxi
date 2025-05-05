import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMouseIcon],svg[picon-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3c0-4 6-4 6 0v2c0 4-6 4-6 0m3-4Q2 2 4 4"></svg:path>`,
})
export class PiconMouseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
