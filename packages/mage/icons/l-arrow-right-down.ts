import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLArrowRightDownIcon],svg[mage-l-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m20.5 14.68l-5.21 5.21a1.213 1.213 0 0 1-1.724 0l-5.209-5.21"></svg:path><svg:path d="M3.5 3.751h7.286a3.643 3.643 0 0 1 3.643 3.643v12.847"></svg:path></svg:g>`,
})
export class MageLArrowRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
