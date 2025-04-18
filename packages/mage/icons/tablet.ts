import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTabletIcon],svg[mage-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.196 5.342l-4.845 4.846a5.992 5.992 0 1 0 8.473 8.473l4.845-4.845a5.992 5.992 0 0 0-8.473-8.474"></svg:path><svg:path d="M16.846 15.639a12.9 12.9 0 0 1-5.053-3.421a12.9 12.9 0 0 1-3.42-5.053m3.633 0a2.56 2.56 0 0 1 3.633 0"></svg:path></svg:g>`,
})
export class MageTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
