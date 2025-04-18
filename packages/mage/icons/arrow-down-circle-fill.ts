import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownCircleFillIcon],svg[mage-arrow-down-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m6 11.65l-4.53 4.58a1.9 1.9 0 0 1-.67.45a1.9 1.9 0 0 1-.79.16a2 2 0 0 1-.79-.16a1.85 1.85 0 0 1-.66-.45L6.03 13.4a1 1 0 1 1 1.42-1.41l3.56 3.6V6.46a1 1 0 1 1 2 0v9.08l3.57-3.55A1.001 1.001 0 0 1 18 13.4"></svg:path>`,
})
export class MageArrowDownCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
