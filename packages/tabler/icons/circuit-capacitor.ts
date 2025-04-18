import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircuitCapacitorIcon],svg[tabler-circuit-capacitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-8M2 12h8m0-5v10m4-10v10"></svg:path>`,
})
export class TablerCircuitCapacitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
