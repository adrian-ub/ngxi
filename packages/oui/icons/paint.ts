import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPaintIcon],svg[oui-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.993 8.17c0 .83-.673 1.507-1.499 1.507H5.498A1.505 1.505 0 0 1 3.999 8.17V6.662h7.994zm-2.998 5.998c0 .455-.448.827-.999.827s-1-.372-1-.827v-3.486h2zM4 5.658h1.262V1.005H4zm2.261 0h1.244V1.005H6.26zm2.244 0H9.74V1.005H8.504zm2.234 0h1.254V1.005h-1.254zM3.008 0L3 8.17a2.51 2.51 0 0 0 2.498 2.512h.5v3.486c0 1.01.896 1.832 1.998 1.832s1.998-.822 1.998-1.832v-3.486h.5a2.51 2.51 0 0 0 2.498-2.512L13 0z"></svg:path>`,
})
export class OuiPaintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
