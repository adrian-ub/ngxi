import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodBitcoinIcon],svg[tabler-mood-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16m3-3h.5a1.5 1.5 0 0 0 0-3H16"></svg:path><svg:path d="M20.87 10.48a9 9 0 1 0-7.876 10.465M9 10h.01M15 10h.01"></svg:path><svg:path d="M9.5 15c.658.64 1.56 1 2.5 1c.357 0 .709-.052 1.043-.151"></svg:path></svg:g>`,
})
export class TablerMoodBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
