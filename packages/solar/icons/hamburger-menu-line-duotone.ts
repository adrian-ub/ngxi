import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuLineDuotoneIcon],svg[solar-hamburger-menu-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 7H4"></svg:path><svg:path d="M20 12H4" opacity=".5"></svg:path><svg:path d="M20 17H4"></svg:path></svg:g>`,
})
export class SolarHamburgerMenuLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
