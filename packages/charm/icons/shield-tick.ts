import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmShieldTickIcon],svg[charm-shield-tick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5z"></svg:path><svg:path d="m5.75 7.75l1.5 1.5l3-3.5"></svg:path></svg:g>`,
})
export class CharmShieldTickIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
