import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEggIcon],svg[openmoji-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M36 64c12.858 0 20.96-11.977 20.96-26.157C56.96 23.19 48.546 8 36 8S15.04 23.191 15.04 37.843C15.04 52.023 23.141 64 36 64"></svg:path><svg:path fill="#d0cfce" d="M56.96 37.84C56.96 52.02 48.86 64 36 64S15.04 52.02 15.04 37.84c2.827 16.42 17.647 18.98 26.64 12.493c9.697-6.997 12.889-31.67-.01-41.233c9.34 3.73 15.29 16.43 15.29 28.74"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 64c12.858 0 20.96-11.977 20.96-26.157C56.96 23.19 48.546 8 36 8S15.04 23.191 15.04 37.843C15.04 52.023 23.141 64 36 64"></svg:path>`,
})
export class OpenmojiEggIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
