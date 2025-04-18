import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeOffIcon],svg[mdi-fridge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V9h2.11l1 1H5v9a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c.58 0 1.1-.25 1.46-.65l2.38 2.38zM10 15H8v-3h2zm9 .8L13.2 10H19zM8.2 5L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2v5h-6.8L10 6.8V5z"></svg:path>`,
})
export class MdiFridgeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
