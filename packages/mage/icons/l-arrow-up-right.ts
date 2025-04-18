import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLArrowUpRightIcon],svg[mage-l-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m14.68 3.5l5.21 5.21a1.21 1.21 0 0 1 0 1.724l-5.21 5.209"></svg:path><svg:path d="M3.751 20.5v-7.286a3.643 3.643 0 0 1 3.643-3.643h12.847"></svg:path></svg:g>`,
})
export class MageLArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
