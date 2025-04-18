import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmShieldKeyholeIcon],svg[charm-shield-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5zm0 5.5v3"></svg:path><svg:circle cx="8" cy="6.5" r=".75" fill="currentColor"></svg:circle></svg:g>`,
})
export class CharmShieldKeyholeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
