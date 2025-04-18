import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDismissCircle48Icon],svg[fluent-color-dismiss-circle-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDismissCircle480)" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4"></svg:path><svg:path fill="url(#fluentColorDismissCircle481)" d="m17.782 16.025l.102.091L24 22.233l6.116-6.117a1.25 1.25 0 0 1 1.666-.091l.102.091a1.25 1.25 0 0 1 .091 1.666l-.091.102L25.767 24l6.117 6.116a1.25 1.25 0 0 1 .091 1.666l-.091.102a1.25 1.25 0 0 1-1.666.091l-.102-.091L24 25.767l-6.116 6.117a1.25 1.25 0 0 1-1.666.091l-.102-.091a1.25 1.25 0 0 1-.091-1.666l.091-.102L22.233 24l-6.117-6.116a1.25 1.25 0 0 1-.091-1.666l.091-.102a1.25 1.25 0 0 1 1.666-.091"></svg:path><svg:defs><svg:lineargradient id="fluentColorDismissCircle480" x1="10.25" x2="36.5" y1="6.5" y2="45.25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#CA2134"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDismissCircle481" x1="16.708" x2="25.3" y1="24.729" y2="33.663" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#FECBE6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDismissCircle48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
