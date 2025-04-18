import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFilterSquareFillIcon],svg[mage-filter-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.75 6.75 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.5 13.95h-5.84a2.54 2.54 0 0 1-4.86 0h-.8a.75.75 0 1 1 0-1.5h.8a2.54 2.54 0 0 1 4.86 0h5.84a.75.75 0 1 1 0 1.5m0-6.39h-.8a2.54 2.54 0 0 1-4.86 0H6.25a.75.75 0 0 1 0-1.5h5.84a2.54 2.54 0 0 1 4.86 0h.8a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M10.53 15.2a1 1 0 1 1-1.997-.1a1 1 0 0 1 1.997.1m5.03-6.39a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class MageFilterSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
