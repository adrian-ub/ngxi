import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHotelIcon],svg[material-symbols-light-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18V5h1v9h8.5V7H19q1.238 0 2.119.881T22 10v8h-1v-3H3v3zm4.998-5.884q-.883 0-1.498-.618t-.615-1.5t.617-1.498t1.5-.615t1.498.617t.616 1.5t-.618 1.498t-1.5.616"></svg:path>`,
})
export class MaterialSymbolsLightHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
