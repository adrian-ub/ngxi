import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiUpRightArrowIcon],svg[openmoji-up-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F3F3F" d="m35.134 14.039l24.229-.897l-.897 24.228l-5.558-.205l.524-14.16L17.54 58.897l-3.933-3.932L49.5 19.072l-14.16.525z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m35.134 14.039l24.229-.897l-.897 24.228l-5.558-.205l.524-14.16L17.54 58.897l-3.933-3.932L49.5 19.072l-14.16.525z"></svg:path>`,
})
export class OpenmojiUpRightArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
