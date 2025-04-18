import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMultiplyCircleFillIcon],svg[mage-multiply-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m4.67 13.5a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.42l-3.25 3.25a1 1 0 0 1-1.41-1.42L10.59 12L7.34 8.75a1 1 0 1 1 1.41-1.41L12 10.59l3.25-3.25a1 1 0 1 1 1.42 1.41L13.42 12z"></svg:path>`,
})
export class MageMultiplyCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
