import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapPostalCodePrefixIcon],svg[map-postal-code-prefix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 0c-8.284 0-15 6.656-15 14.866s15 35.135 15 35.135s15-26.924 15-35.135S33.284 0 25 0m-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588c0-2.535 2.072-4.589 4.629-4.589c2.559 0 4.631 2.054 4.631 4.589c0 2.533-2.072 4.588-4.631 4.588"></svg:path>`,
})
export class MapPostalCodePrefixIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
