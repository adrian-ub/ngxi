import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDashMenuIcon],svg[mage-dash-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"></svg:path>`,
})
export class MageDashMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
