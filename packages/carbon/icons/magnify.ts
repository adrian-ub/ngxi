import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMagnifyIcon],svg[carbon-magnify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M12 21H4V4h18v8h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h8z" fill="currentColor"></svg:path><svg:path d="M30 28.58l-3.11-3.11a6 6 0 1 0-1.42 1.42L28.58 30zM22 26a4 4 0 1 1 4-4a4 4 0 0 1-4 4z" fill="currentColor"></svg:path>`,
})
export class CarbonMagnifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
