import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmShieldCrossIcon],svg[charm-shield-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5zm1.75 4l-3.5 3.5m0-3.5l3.5 3.5"></svg:path>`,
})
export class CharmShieldCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
