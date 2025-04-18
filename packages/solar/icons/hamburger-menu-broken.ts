import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuBrokenIcon],svg[solar-hamburger-menu-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"></svg:path>`,
})
export class SolarHamburgerMenuBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
