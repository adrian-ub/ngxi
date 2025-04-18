import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCoinIcon],svg[jam-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13v-2a3 3 0 1 1 0-6V4a1 1 0 1 1 2 0v1h.022A2.98 2.98 0 0 1 14 7.978a1 1 0 0 1-2 0A.98.98 0 0 0 11.022 7H11v2a3 3 0 0 1 0 6v1a1 1 0 0 1-2 0v-1h-.051A2.95 2.95 0 0 1 6 12.051a1 1 0 1 1 2 0a.95.95 0 0 0 .949.949zm2 0a1 1 0 0 0 0-2zM9 7a1 1 0 1 0 0 2zm1 13C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class JamCoinIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
