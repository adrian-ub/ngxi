import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLocationPinIcon],svg[mage-location-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13.632A5.441 5.441 0 1 0 12 2.75a5.441 5.441 0 0 0 0 10.882m0 0v7.618"></svg:path>`,
})
export class MageLocationPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
