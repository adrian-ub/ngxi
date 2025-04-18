import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMessageErrorIcon],svg[bx-message-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="M11 6h2v5h-2zm0 6h2v2h-2z"></svg:path>`,
})
export class BxMessageErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
