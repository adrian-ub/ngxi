import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapSearchIcon],svg[tabler-map-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 18l-2-1l-6 3V7l6-3l6 3l6-3v7.5M9 4v13m6-10v5m0 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path>`,
})
export class TablerMapSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
