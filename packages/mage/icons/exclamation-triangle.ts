import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageExclamationTriangleIcon],svg[mage-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M10.367 4.462L2.752 17.655a1.885 1.885 0 0 0 1.634 2.827h15.228a1.885 1.885 0 0 0 1.633-2.827L13.633 4.462a1.885 1.885 0 0 0-3.266 0m1.628 3.116v6.277"></svg:path><svg:path stroke-width="2" d="M12.043 17.326h-.009"></svg:path></svg:g>`,
})
export class MageExclamationTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
