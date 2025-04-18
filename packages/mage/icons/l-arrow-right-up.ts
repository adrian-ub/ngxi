import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLArrowRightUpIcon],svg[mage-l-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m20.5 9.32l-5.21-5.21a1.215 1.215 0 0 0-1.724 0L8.357 9.32"></svg:path><svg:path d="M3.5 20.249h7.286a3.643 3.643 0 0 0 3.643-3.643V3.759"></svg:path></svg:g>`,
})
export class MageLArrowRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
