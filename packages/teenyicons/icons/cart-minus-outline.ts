import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCartMinusOutlineIcon],svg[teenyicons-cart-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5.5l.6 2m0 0l2.4 8h11v-6a2 2 0 0 0-2-2zm4.9 4h5m1.5 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-8-1a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z"></svg:path>`,
})
export class TeenyiconsCartMinusOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
