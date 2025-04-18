import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignal6gIcon],svg[tabler-signal-6g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1m-7-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6"></svg:path>`,
})
export class TablerSignal6gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
