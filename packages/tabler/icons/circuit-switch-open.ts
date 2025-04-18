import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircuitSwitchOpenIcon],svg[tabler-circuit-switch-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h2m16 0h2M4 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8.5-1.5L15 5"></svg:path>`,
})
export class TablerCircuitSwitchOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
