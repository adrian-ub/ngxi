import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDelIcon],svg[token-branded-del-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDel0)" d="M19.2 3H4.8v3.6H15v10.8H4.8V21h14.4zm-7.8 7.2H4.8v3.6h6.6z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDel0" x1="7.757" x2="19.809" y1="5.571" y2="15.72" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#02FDAD"></svg:stop><svg:stop offset=".45" stop-color="#457DF4"></svg:stop><svg:stop offset="1" stop-color="#9845F5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
