import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSeedlingIcon],svg[tabler-seedling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3m0 2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3m0 5V10"></svg:path>`,
})
export class TablerSeedlingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
