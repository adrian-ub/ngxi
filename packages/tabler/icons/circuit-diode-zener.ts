import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircuitDiodeZenerIcon],svg[tabler-circuit-diode-zener-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12h-6M2 12h6m0-5l8 5l-8 5z"></svg:path><svg:path d="M14 7h2v10h2"></svg:path></svg:g>`,
})
export class TablerCircuitDiodeZenerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
