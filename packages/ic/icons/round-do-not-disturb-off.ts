import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDoNotDisturbOffIcon],svg[ic-round-do-not-disturb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11v2h-1.17l4.51 4.51A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.04 0-3.93.61-5.51 1.66L13.83 11zM2.1 4.93l1.56 1.56c-1.37 2.07-2 4.68-1.48 7.45c.75 3.95 3.92 7.13 7.88 7.88c2.77.52 5.38-.1 7.45-1.48l1.56 1.56a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42M7 11h1.17l2 2H7z"></svg:path>`,
})
export class IcRoundDoNotDisturbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
