import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCoffeeIcon],svg[bx-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2m-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10zm2-2v-5h2l.002 5z"></svg:path>`,
})
export class BxCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
