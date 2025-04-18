import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageEarthIcon],svg[mage-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M5.37 5.19c4.24 1 2.25 4.72 2.19 8.5c0 4.1 3.36 1.62 3.21 3.56a13 13 0 0 0 .83 4.24m3.14-18.58c0 1.38 0 2.57-.74 2.78c-1.11.31-.28 4.23-1 6.09s2.53 2.5 4 1S17.39 10 19 10c.57 0 1.44.1 2.32.13"></svg:path></svg:g>`,
})
export class MageEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
