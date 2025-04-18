import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStickerCircleLineDuotoneIcon],svg[solar-sticker-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 12c0 5.523 4.477 10 10 10c.648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z"></svg:path><svg:path d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarStickerCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
