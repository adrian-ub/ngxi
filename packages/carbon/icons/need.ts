import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNeedIcon],svg[carbon-need-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.121 16.879A2.98 2.98 0 0 0 27.01 16H27a2.98 2.98 0 0 0-2.121.879l-4.901 4.901A2.994 2.994 0 0 0 17 19h-7a5.006 5.006 0 0 0-5 5v.667l-3 3.996l1.6 1.2l3.4-4.53V24a3.003 3.003 0 0 1 3-3h7a1 1 0 0 1 0 2h-4v2h4.929a3.97 3.97 0 0 0 2.828-1.172l5.536-5.535A1 1 0 0 1 27 18h.003a1 1 0 0 1 .704 1.707l-7.414 7.414a2.98 2.98 0 0 1-2.122.879H11v2h7.171a4.97 4.97 0 0 0 3.536-1.465l7.414-7.414a3 3 0 0 0 0-4.242m-7.535-8.293L18 12V2h-2v10l-3.586-3.414L11 10l6 6l6-6z"></svg:path>`,
})
export class CarbonNeedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
