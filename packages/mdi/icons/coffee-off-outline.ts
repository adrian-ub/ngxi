import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeOffOutlineIcon],svg[mdi-coffee-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3.27l2 2V13c0 2.21 1.79 4 4 4h6c.5 0 1-.11 1.44-.29L17.73 19H2v2h17.73l.99 1L22 20.72L3.27 2zM8 15c-1.1 0-2-.9-2-2V7.27L13.73 15zM20 3H6.81l2 2H16v7.19l1.85 1.85c.09-.34.15-.68.15-1.04v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2z"></svg:path>`,
})
export class MdiCoffeeOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
