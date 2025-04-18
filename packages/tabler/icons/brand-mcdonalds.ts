import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandMcdonaldsIcon],svg[tabler-brand-mcdonalds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20c0-3.952-.966-16-4.038-16S12 13.087 12 18.756C12 13.087 11.104 4 8.038 4C4.973 4 4 16.048 4 20"></svg:path>`,
})
export class TablerBrandMcdonaldsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
