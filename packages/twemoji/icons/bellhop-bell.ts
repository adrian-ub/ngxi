import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBellhopBellIcon],svg[twemoji-bellhop-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4900C" d="M15 26h6v4h-6z"></svg:path><svg:path fill="#FFAC33" d="M30 18c0 7 3 4 3 7c0 0 0 2-2 2H5c-2 0-2-2-2-2c0-3 3 0 3-7c0-5.523 6.477-8 12-8s12 2.477 12 8"></svg:path><svg:circle cx="18" cy="10" r="3" fill="#FFAC33"></svg:circle><svg:path fill="#C1694F" d="M35 33a2 2 0 0 1-2 2H3a2 2 0 0 1 0-4h30a2 2 0 0 1 2 2"></svg:path><svg:path fill="#C1694F" d="M33 31a2 2 0 0 1-2 2H5a2 2 0 0 1 0-4h26a2 2 0 0 1 2 2"></svg:path>`,
})
export class TwemojiBellhopBellIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
