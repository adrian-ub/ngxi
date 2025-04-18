import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFilterVariantPlusIcon],svg[mdi-filter-variant-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V6h18zm-7.19 8H10v2h3.09c.12-.72.37-1.39.72-2M18 11H6v2h12zm0 4v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiFilterVariantPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
