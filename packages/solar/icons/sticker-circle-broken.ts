import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStickerCircleBrokenIcon],svg[solar-sticker-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10c0 .648-.3 1.25-.758 1.708l-7.534 7.534C13.25 21.7 12.648 22 12 22C6.477 22 2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path><svg:path d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"></svg:path></svg:g>`,
})
export class SolarStickerCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
