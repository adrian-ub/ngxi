import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandMatrixIcon],svg[tabler-brand-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 3H3v18h1m16 0h1V3h-1M7 9v6m5 0v-3.5a2.5 2.5 0 1 0-5 0v.5m10 3v-3.5a2.5 2.5 0 1 0-5 0v.5"></svg:path>`,
})
export class TablerBrandMatrixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
