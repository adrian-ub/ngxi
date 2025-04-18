import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDismissCircle20Icon],svg[fluent-color-dismiss-circle-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDismissCircle200)" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16"></svg:path><svg:path fill="url(#fluentColorDismissCircle201)" fill-rule="evenodd" d="M7.146 7.146a.5.5 0 0 1 .708 0L10 9.293l2.146-2.147a.5.5 0 0 1 .708.708L10.707 10l2.147 2.146a.5.5 0 0 1-.708.708L10 10.707l-2.146 2.147a.5.5 0 0 1-.708-.708L9.293 10L7.146 7.854a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorDismissCircle200" x1="4.5" x2="15" y1="3" y2="18.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#CA2134"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDismissCircle201" x1="7.348" x2="10.473" y1="10.265" y2="13.514" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#FECBE6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDismissCircle20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
