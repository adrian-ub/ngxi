import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSidebarIcon],svg[bx-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 19V7h6v12zm8 0V7h8V5l.002 14z"></svg:path><svg:path fill="currentColor" d="M6 10h2v2H6zm0 4h2v2H6z"></svg:path>`,
})
export class BxSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
