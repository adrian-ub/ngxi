import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortLineDuotoneIcon],svg[solar-sort-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 7H2"></svg:path><svg:path d="M19 12H5" opacity=".5"></svg:path><svg:path d="M16 17H8"></svg:path></svg:g>`,
})
export class SolarSortLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
