import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircuitChangeoverIcon],svg[tabler-circuit-changeover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h2m16-5h2M4 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12-5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 10h2m-6 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8.5-6.5L16 7"></svg:path>`,
})
export class TablerCircuitChangeoverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
