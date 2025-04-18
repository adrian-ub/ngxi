import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFiltersIcon],svg[tabler-filters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8"></svg:path><svg:path d="M8 11a5 5 0 1 0 3.998 1.997"></svg:path><svg:path d="M12.002 19.003A5 5 0 1 0 16 11"></svg:path></svg:g>`,
})
export class TablerFiltersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
