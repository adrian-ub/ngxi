import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCompassFillIcon],svg[mage-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.727a10.25 10.25 0 1 0 10.25 10.25A10.26 10.26 0 0 0 12 1.727m-2.15 8.38a.4.4 0 0 1 .1-.17a.46.46 0 0 1 .18-.11l6-2l-2 6.06a.5.5 0 0 1-.1.15a.37.37 0 0 1-.17.1l-6 2z"></svg:path>`,
})
export class MageCompassFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
