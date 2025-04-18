import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCashPlusIcon],svg[mdi-cash-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15v2h3v3h2v-3h3v-2h-3v-3h-2v3m-3.03-3.39C14.85 10.28 13.59 8.97 12 9c-1.7.03-3 1.3-3 3s1.3 2.94 3 3c.38 0 .77-.08 1.14-.23c.27-1.1.72-2.14 1.83-3.16M13 16H7a2 2 0 0 0-2-2v-4c1.11 0 2-.89 2-2h10a2 2 0 0 0 2 2v.06c.67 0 1.34.12 2 .34V6H3v12h10.32a6.4 6.4 0 0 1-.32-2"></svg:path>`,
})
export class MdiCashPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
