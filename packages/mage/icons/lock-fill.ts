import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLockFillIcon],svg[mage-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.38 9.1V7.51a5.378 5.378 0 0 0-7.487-5.18A5.38 5.38 0 0 0 6.63 7.51V9.1a3.12 3.12 0 0 0-2.88 3v6.94A3.16 3.16 0 0 0 7 22.1h10a3.16 3.16 0 0 0 3.25-3.06V12.1a3.12 3.12 0 0 0-2.87-3M8.13 7.51a3.84 3.84 0 0 1 1.13-2.74A3.9 3.9 0 0 1 12 3.63a3.89 3.89 0 0 1 3.88 3.88v1.56H8.13zm7.34 11.4h-6.9a1 1 0 0 1 0-2h6.94a1 1 0 1 1 0 2z"></svg:path>`,
})
export class MageLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
