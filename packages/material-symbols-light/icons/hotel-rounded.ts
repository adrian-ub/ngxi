import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHotelRoundedIcon],svg[material-symbols-light-hotel-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 18q-.214 0-.357-.144T2 17.5v-12q0-.213.144-.356T2.501 5t.356.144T3 5.5V14h8.5V8q0-.402.299-.701T12.5 7H19q1.238 0 2.119.881T22 10v7.5q0 .213-.144.356t-.357.144t-.356-.144T21 17.5V15H3v2.5q0 .213-.144.356T2.499 18m4.499-5.884q-.883 0-1.498-.618t-.615-1.5t.617-1.498t1.5-.615t1.498.617t.616 1.5t-.618 1.498t-1.5.616"></svg:path>`,
})
export class MaterialSymbolsLightHotelRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
