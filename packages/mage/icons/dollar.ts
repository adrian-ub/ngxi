import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDollarIcon],svg[mage-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M9 14.433a2.82 2.82 0 0 0 3 2.57c2.42 0 3-1.39 3-2.57s-1-2.43-3-2.43s-3-.79-3-2.4a2.75 2.75 0 0 1 3-2.6a2.89 2.89 0 0 1 3 2.6M12 18.5v-1.3m0-11.7v1.499"></svg:path></svg:g>`,
})
export class MageDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
