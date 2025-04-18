import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsCoatCheckIcon],svg[grommet-icons-coat-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 11l10.155 6.462c.467.297.845.981.845 1.547v1.982A1 1 0 0 1 21.998 22H2.002A1 1 0 0 1 1 20.99v-1.98c0-.558.379-1.251.845-1.548zm3-6a3 3 0 0 0-6 0c0 .932.411 1.802 1.09 2.314C11 8 12 8 12 9.5V11"></svg:path>`,
})
export class GrommetIconsCoatCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
