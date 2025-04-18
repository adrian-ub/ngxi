import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundLineDuotoneIcon],svg[solar-palette-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"></svg:path><svg:path d="m10 8.243l3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"></svg:path><svg:path d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaletteRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
