import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRightArrowIcon],svg[openmoji-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F3F3F" d="M49.212 51.534L67 35.036L49.212 18.538l-3.789 4.076l10.396 9.641H5v5.562h50.819l-10.396 9.642z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M49.212 51.534L67 35.036L49.212 18.538l-3.789 4.076l10.396 9.641H5v5.562h50.819l-10.396 9.642z"></svg:path>`,
})
export class OpenmojiRightArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
