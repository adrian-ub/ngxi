import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDivideCircleFillIcon],svg[mage-divide-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m0 5.11a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m0 10.29a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageDivideCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
