import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignal2gIcon],svg[tabler-signal-2g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1M5 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4"></svg:path>`,
})
export class TablerSignal2gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
