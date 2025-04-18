import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMagnetRightIcon],svg[mage-magnet-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M20.163 20.696h-8.404a8.893 8.893 0 0 1-8.99-8.12a8.697 8.697 0 0 1 8.697-9.273h8.697A1.087 1.087 0 0 1 21.25 4.39v3.26a1.087 1.087 0 0 1-1.087 1.087h-8.697a3.261 3.261 0 1 0 0 6.523h8.697a1.087 1.087 0 0 1 1.087 1.087v3.261a1.087 1.087 0 0 1-1.087 1.087ZM14.727 8.738V3.303m0 17.393v-5.435"></svg:path>`,
})
export class MageMagnetRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
