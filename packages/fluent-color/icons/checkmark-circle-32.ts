import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCheckmarkCircle32Icon],svg[fluent-color-checkmark-circle-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCheckmarkCircle320)" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14"></svg:path><svg:path fill="url(#fluentColorCheckmarkCircle321)" d="M22.707 12.707a1 1 0 0 0-1.414-1.414L14.5 18.086l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorCheckmarkCircle320" x1="3" x2="22.323" y1="7.25" y2="27.326" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCheckmarkCircle321" x1="12.031" x2="14.162" y1="11.969" y2="22.66" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#E3FFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCheckmarkCircle32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
