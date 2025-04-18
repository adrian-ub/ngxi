import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMailSendIcon],svg[bx-mail-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1 1 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-7 6.75L6.666 6h12.668z"></svg:path><svg:path fill="currentColor" d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></svg:path>`,
})
export class BxMailSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
