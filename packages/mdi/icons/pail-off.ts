import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPailOffIcon],svg[mdi-pail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-3.49-3.49L17 21H7l-1.21-6.03l4.62-2.67l-1.1-1.1l-5.04 2.91a.998.998 0 1 1-1-1.73l4.58-2.64l-1.1-1.1l-1.99 1.15L4 6H3V4.89L1.11 3l1.28-1.27l19.72 19.73zM10.71 6.36A2.5 2.5 0 0 1 14.5 8.5c0 .77-.34 1.44-.9 1.9l4.6 4.6L20 6h1V4H7.2L10 6.78zm.79 1.27l-.42.25l1.45 1.45c.44-.28.6-.87.33-1.33a.976.976 0 0 0-1.36-.37"></svg:path>`,
})
export class MdiPailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
