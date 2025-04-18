import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneWaterDamageIcon],svg[ic-twotone-water-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.69l-5 4.5V18h10v-7.81zM12 16c-1.1 0-2-.9-2-2s2-4 2-4s2 2.9 2 4s-.9 2-2 2" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zM7 18v-7.81l5-4.5l5 4.5V18zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2s2-4 2-4s2 2.9 2 4"></svg:path>`,
})
export class IcTwotoneWaterDamageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
