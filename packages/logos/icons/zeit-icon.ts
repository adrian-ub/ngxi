import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosZeitIconIcon],svg[logos-zeit-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient x1="100.93%" y1="181.283%" x2="41.769%" y2="100%" id="ssvg-id-zeit-icona"><svg:stop stop-color="#FFF" offset="0%"></svg:stop><svg:stop offset="100%"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#ssvg-id-zeit-icona)" d="M128 0l128 227.093H0z"></svg:path>`,
})
export class LogosZeitIconIcon {
  readonly viewBox = input("0 0 256 228")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
