import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiUpLeftArrowIcon],svg[openmoji-up-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F3F3F" d="m37.836 14.039l-24.229-.897l.897 24.228l5.558-.205l-.524-14.16L55.43 58.897l3.933-3.932L23.47 19.072l14.16.525z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m37.836 14.039l-24.229-.897l.897 24.228l5.558-.205l-.524-14.16L55.43 58.897l3.933-3.932L23.47 19.072l14.16.525z"></svg:path>`,
})
export class OpenmojiUpLeftArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
