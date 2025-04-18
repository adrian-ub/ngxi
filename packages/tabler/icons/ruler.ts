import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRulerIcon],svg[tabler-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1M4 8h2m-2 4h3m-3 4h2M8 4v2m4-2v3m4-3v2"></svg:path>`,
})
export class TablerRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
