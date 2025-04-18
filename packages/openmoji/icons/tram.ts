import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTramIcon],svg[openmoji-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" d="M21 50L11 61h50L51 50z"></svg:path><svg:rect width="28.8" height="33" x="21.6" y="15" fill="#d0cfce" rx="3.056" ry="3.056"></svg:rect><svg:path fill="#61b2e4" d="M25 19h22v14H25z"></svg:path><svg:path fill="#92d3f5" d="M47 19H25v14"></svg:path><svg:path fill="#fcea2b" d="M25 37h5v5h-5zm17 0h5v5h-5z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:rect width="28.8" height="33" x="21.6" y="15" stroke-linejoin="round" rx="3.056" ry="3.056"></svg:rect><svg:path stroke-miterlimit="10" d="m24 51l-8 9m32-9l8 9"></svg:path><svg:path stroke-linejoin="round" d="M35.166 15L27 8h17zM47 20v13H26m0 9h4v-4m13 4h4v-4"></svg:path></svg:g>`,
})
export class OpenmojiTramIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
