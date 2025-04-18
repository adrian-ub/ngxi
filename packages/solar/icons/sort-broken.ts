import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortBrokenIcon],svg[solar-sort-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 7H9M2 7h3m14 5h-3M5 12h7m4 5H8"></svg:path>`,
})
export class SolarSortBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
