import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortLinearIcon],svg[solar-sort-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 7H2m17 5H5m11 5H8"></svg:path>`,
})
export class SolarSortLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
