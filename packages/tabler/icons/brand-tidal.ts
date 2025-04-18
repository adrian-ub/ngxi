import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTidalIcon],svg[tabler-brand-tidal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.333 6l3.334 3.25L12 6l3.333 3.25L18.667 6L22 9.25l-3.333 3.25l-3.334-3.25L12 12.5l3.333 3.25L12 19l-3.333-3.25L12 12.5L8.667 9.25L5.333 12.5L2 9.25z"></svg:path>`,
})
export class TablerBrandTidalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
