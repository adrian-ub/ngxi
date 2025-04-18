import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolReplyIcon],svg[websymbol-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M501 0v319q110 15 203.5 45t159 68T982 514.5t86 90.5t57 90.5t35 83.5t17.5 69t6.5 47l1 17q-6-11-19-29.5t-67.5-63T974 743t-196-52q-77-12-162-12q-55 0-115 5v316L0 501z"></svg:path>`,
})
export class WebsymbolReplyIcon {
  readonly viewBox = input("0 0 1185 1000")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
