import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFilterVariantMinusIcon],svg[mdi-filter-variant-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V6h18zm-7.19 8H10v2h3.09c.12-.72.37-1.39.72-2M18 11H6v2h12zm5 7h-8v2h8z"></svg:path>`,
})
export class MdiFilterVariantMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
