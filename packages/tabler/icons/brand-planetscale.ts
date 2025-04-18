import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandPlanetscaleIcon],svg[tabler-brand-planetscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.993 11.63a9 9 0 0 1-9.362 9.362zM12 3a9 9 0 0 1 8.166 5.211L8.211 20.166A9 9 0 0 1 12 3m0 9l-6 6"></svg:path>`,
})
export class TablerBrandPlanetscaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
