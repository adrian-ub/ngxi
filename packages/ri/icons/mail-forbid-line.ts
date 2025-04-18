import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailForbidLineIcon],svg[ri-mail-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7.238l-7.928 7.1L4 7.216V19h7.07c.102.706.308 1.378.604 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255a7 7 0 0 0-2-.965zM19.501 5H4.511l7.55 6.662zm-2.794 15.708a3 3 0 0 0 4.001-4.001zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001M18 23a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class RiMailForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
