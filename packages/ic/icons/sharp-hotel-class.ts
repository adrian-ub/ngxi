import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHotelClassIcon],svg[ic-sharp-hotel-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.58 10H1l6.17 4.41L4.83 22L11 17.31L17.18 22l-2.35-7.59L21 10h-7.58L11 2zm12.78 12l-1.86-6.01L23.68 13h-3.44l-3.08 2.2l1.46 4.72zM17 8l-1.82-6l-1.04 3.45l.77 2.55z"></svg:path>`,
})
export class IcSharpHotelClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
