import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortVariantRemoveIcon],svg[mdi-sort-variant-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h12v-2H3m0-5v2h18V6M3 18h6v-2H3zm19.54-1.12L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.13z"></svg:path>`,
})
export class MdiSortVariantRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
