import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircuitAmmeterIcon],svg[tabler-circuit-ammeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0m0 0H2m17 0h3"></svg:path><svg:path d="M10 14v-3c0-1.036.895-2 2-2s2 .964 2 2v3m0-2h-4"></svg:path></svg:g>`,
})
export class TablerCircuitAmmeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
