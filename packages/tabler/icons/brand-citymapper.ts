import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCitymapperIcon],svg[tabler-brand-citymapper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11a1 1 0 1 1-1 1.013a1 1 0 0 1 1-1zm18 0a1 1 0 1 1-1 1.013a1 1 0 0 1 1-1zM8 12h8m-3-3l3 3l-3 3"></svg:path>`,
})
export class TablerBrandCitymapperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
