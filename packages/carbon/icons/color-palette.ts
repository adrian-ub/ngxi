import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonColorPaletteIcon],svg[carbon-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="9" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="23" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="23" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2m8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5 5 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.9 11.9 0 0 1-3.35 8.79Z"></svg:path>`,
})
export class CarbonColorPaletteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
