import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFilterVariantIcon],svg[mdi-filter-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4z"></svg:path>`,
})
export class MdiFilterVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
