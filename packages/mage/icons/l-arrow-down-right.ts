import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLArrowDownRightIcon],svg[mage-l-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m14.68 20.5l5.21-5.21a1.21 1.21 0 0 0 0-1.724l-5.21-5.209"></svg:path><svg:path d="M3.751 3.5v7.286a3.643 3.643 0 0 0 3.643 3.643h12.847"></svg:path></svg:g>`,
})
export class MageLArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
