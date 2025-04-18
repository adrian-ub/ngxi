import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundBoldIcon],svg[solar-palette-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.9 22a4 4 0 1 0 0-8h-.22l-5.802 5.798a1.22 1.22 0 0 0-.378.883c0 .713.577 1.319 1.29 1.319zM13.284 4.959l-1.055 1.055a2.5 2.5 0 0 0-.729 1.76v8.238c0 1.055 0 1.582.313 1.708c.314.126.679-.255 1.409-1.016l5.838-6.09a4.042 4.042 0 0 0-5.776-5.655"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0M6 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaletteRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
