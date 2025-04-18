import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHotelSharpIcon],svg[material-symbols-light-hotel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18V5h1v9h8.5V7H22v11h-1v-3H3v3zm4.998-5.884q-.883 0-1.498-.618t-.615-1.5t.617-1.498t1.5-.615t1.498.617t.616 1.5t-.618 1.498t-1.5.616m.002-1q.464 0 .79-.326t.326-.79t-.326-.79T7 8.886t-.79.326t-.325.789t.326.79t.789.326m0 0q-.463 0-.79-.326T5.885 10t.326-.79T7 8.886t.79.326t.326.789t-.326.79t-.79.326"></svg:path>`,
})
export class MaterialSymbolsLightHotelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
