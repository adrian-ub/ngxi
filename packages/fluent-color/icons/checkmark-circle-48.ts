import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCheckmarkCircle48Icon],svg[fluent-color-checkmark-circle-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCheckmarkCircle480)" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4"></svg:path><svg:path fill="url(#fluentColorCheckmarkCircle481)" d="M32.634 17.616a1.25 1.25 0 0 1 0 1.768l-11 11a1.25 1.25 0 0 1-1.768 0l-4.5-4.5a1.25 1.25 0 0 1 1.768-1.768l3.616 3.616l10.116-10.116a1.25 1.25 0 0 1 1.768 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorCheckmarkCircle480" x1="5.429" x2="33.033" y1="11.5" y2="40.18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCheckmarkCircle481" x1="18.375" x2="21.586" y1="18.627" y2="33.741" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#E3FFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCheckmarkCircle48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
