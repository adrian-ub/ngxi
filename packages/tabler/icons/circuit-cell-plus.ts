import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircuitCellPlusIcon],svg[tabler-circuit-cell-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h9m4 0h7M11 5v14m4-10v6M3 5h4M5 3v4"></svg:path>`,
})
export class TablerCircuitCellPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
