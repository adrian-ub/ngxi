import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDismissCircle28Icon],svg[fluent-color-dismiss-circle-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDismissCircle280)" d="M26 14c0-6.627-5.373-12-12-12S2 7.373 2 14s5.373 12 12 12s12-5.373 12-12"></svg:path><svg:path fill="url(#fluentColorDismissCircle281)" d="M18.28 9.72a.75.75 0 0 1 0 1.06L15.06 14l3.22 3.22a.75.75 0 1 1-1.06 1.06L14 15.06l-3.22 3.22a.75.75 0 1 1-1.06-1.06L12.94 14l-3.22-3.22a.75.75 0 1 1 1.06-1.06L14 12.94l3.22-3.22a.75.75 0 0 1 1.06 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorDismissCircle280" x1="5.75" x2="21.5" y1="3.5" y2="26.75" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#CA2134"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDismissCircle281" x1="10.023" x2="14.709" y1="14.398" y2="19.271" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#FECBE6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDismissCircle28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
