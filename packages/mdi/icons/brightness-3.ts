import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBrightness3Icon],svg[mdi-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c-1.05 0-2.05.16-3 .46c4.06 1.27 7 5.04 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46a10 10 0 0 0 10-10A10 10 0 0 0 9 2"></svg:path>`,
})
export class MdiBrightness3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
