import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsMoneyIcon],svg[humbleicons-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8H3v10h18V8h-1.5m-4-1a3 3 0 1 1-4 4.258M13 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class HumbleiconsMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
