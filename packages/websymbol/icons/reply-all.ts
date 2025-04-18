import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolReplyAllIcon],svg[websymbol-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M501 0v182L182 501l319 318v181L0 501zm365 0v319q110 15 203.5 45t159 68t118.5 82.5t86 90.5t57 90.5t35 83.5t17.5 69t7.5 47v17q-6-11-19-29.5t-67.5-63T1339 743q-71-32-197-52q-77-12-161-12q-55 0-115 5v316L365 501z"></svg:path>`,
})
export class WebsymbolReplyAllIcon {
  readonly viewBox = input("0 0 1550 1000")
  readonly width = input("1.55em")
  readonly height = input("1em")
}
