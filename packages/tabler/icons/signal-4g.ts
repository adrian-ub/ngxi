import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignal4gIcon],svg[tabler-signal-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8v3a1 1 0 0 0 1 1h3m0-4v8m7-8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1"></svg:path>`,
})
export class TablerSignal4gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
