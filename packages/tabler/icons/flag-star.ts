import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlagStarIcon],svg[tabler-flag-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.475 13.551A5 5 0 0 0 5 14V5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v5M5 21v-7m12.8 6.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411z"></svg:path>`,
})
export class TablerFlagStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
