import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightCircleFillIcon],svg[mage-arrow-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m6.43 11a2.2 2.2 0 0 1-.45.67l-4.58 4.53a1 1 0 0 1-1.42-.01a1 1 0 0 1 0-1.41l3.61-3.57H6.44a1 1 0 0 1 0-2h9.09l-3.55-3.57a1 1 0 1 1 1.42-1.41l4.58 4.53c.19.194.343.42.45.67a2 2 0 0 1 0 1.58z"></svg:path>`,
})
export class MageArrowRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
