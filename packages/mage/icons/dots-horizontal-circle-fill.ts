import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalCircleFillIcon],svg[mage-dots-horizontal-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75M7.06 13.68a1.68 1.68 0 1 1 0-3.36a1.68 1.68 0 0 1 0 3.36m4.94 0a1.68 1.68 0 1 1-.02-3.36a1.68 1.68 0 0 1 .02 3.36m4.94 0a1.68 1.68 0 1 1-.02-3.36a1.68 1.68 0 0 1 .02 3.36"></svg:path>`,
})
export class MageDotsHorizontalCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
