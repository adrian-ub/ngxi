import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpIcecreamIcon],svg[ic-sharp-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.01 4.01 0 0 0 3 10c0 2.21 1.79 4 4 4c.12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03c2.21 0 4-1.79 4-4c0-1.71-1.08-3.19-2.62-3.76m-6.33 12.39l-2.73-5.21a6.47 6.47 0 0 0 5.4-.02z"></svg:path>`,
})
export class IcSharpIcecreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
