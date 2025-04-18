import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDotsSquareFillIcon],svg[mage-dots-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2M12 18.5a1.66 1.66 0 1 1-.02-3.318A1.66 1.66 0 0 1 12 18.5m0-4.8a1.66 1.66 0 1 1 1.65-1.66A1.67 1.67 0 0 1 12 13.66zm0-4.81a1.66 1.66 0 1 1 1.65-1.66A1.66 1.66 0 0 1 12 8.85z"></svg:path>`,
})
export class MageDotsSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
