import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuLinearIcon],svg[solar-hamburger-menu-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"></svg:path>`,
})
export class SolarHamburgerMenuLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
