import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFilterVariantRemoveIcon],svg[mdi-filter-variant-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V6h18zm-7.19 8H10v2h3.09c.12-.72.37-1.39.72-2M18 11H6v2h12zm3.12 4.46L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiFilterVariantRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
