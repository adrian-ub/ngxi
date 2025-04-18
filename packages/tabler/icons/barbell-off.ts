import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBarbellOffIcon],svg[tabler-barbell-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h1m3-4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m.298-9.712A1 1 0 0 0 6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9m0 3h3m3 3v2a1 1 0 0 0 1 1h1c.275 0 .523-.11.704-.29M18 14V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4m3-3h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m2-4h-1M3 3l18 18"></svg:path>`,
})
export class TablerBarbellOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
