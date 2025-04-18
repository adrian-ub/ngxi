import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageRefreshIcon],svg[mage-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M17.605 7.705A7.9 7.9 0 0 0 12 5.382a7.93 7.93 0 0 0-7.929 7.929A7.94 7.94 0 0 0 12 21.25a7.94 7.94 0 0 0 7.929-7.94"></svg:path><svg:path stroke-linejoin="round" d="m16.88 2.75l.95 3.858a1.33 1.33 0 0 1-.97 1.609l-3.869.948"></svg:path></svg:g>`,
})
export class MageRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
