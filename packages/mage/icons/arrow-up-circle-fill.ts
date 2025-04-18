import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpCircleFillIcon],svg[mage-arrow-up-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m6 10.26a1 1 0 0 1-1.42 0l-3.57-3.57v9.1a1 1 0 0 1-2 0v-9l-3.57 3.51a1 1 0 1 1-1.41-1.41l4.55-4.53a2.07 2.07 0 0 1 1.46-.61a2 2 0 0 1 .79.16c.253.1.482.254.67.45l4.53 4.53a1 1 0 0 1-.04 1.37z"></svg:path>`,
})
export class MageArrowUpCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
