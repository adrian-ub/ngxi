import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsCoffeeIcon],svg[bx-bxs-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-2 7v-5h2l.002 5H17z" fill="currentColor"></svg:path>`,
})
export class BxBxsCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
