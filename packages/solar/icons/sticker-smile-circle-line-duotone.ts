import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStickerSmileCircleLineDuotoneIcon],svg[solar-sticker-smile-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0 5.523 4.477 10 10 10c.648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934a8.1 8.1 0 0 0 3.356.1"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"></svg:path></svg:g>`,
})
export class SolarStickerSmileCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
