import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUcjlIcon],svg[token-branded-ucjl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedUcjl0)" d="M12 19.875a7.875 7.875 0 1 0 0-15.75a7.875 7.875 0 0 0 0 15.75M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="url(#tokenBrandedUcjl1)" d="M12 19.875a7.875 7.875 0 1 0 0-15.75a7.875 7.875 0 0 0 0 15.75"></svg:path><svg:path fill="#D7E6F9" d="M12.563 9.469V6.094l-3.938 2.25V9.75c.282.281.788.563 1.688.563s1.873-.563 2.25-.844"></svg:path><svg:path fill="#D5DBFB" d="m15.376 7.5l-2.813 1.969V16.5l2.813-1.687z"></svg:path><svg:path fill="#fff" d="M10.313 10.313c-.562 0-1.592-.377-1.688-.563v6.75c.096.281.563.844 1.688.844s1.969-.563 2.25-.844V9.47c-.563.281-1.536.844-2.25.844"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedUcjl0" x1="20.437" x2="3.844" y1="12" y2="12.281" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#17C8FA"></svg:stop><svg:stop offset="1" stop-color="#975DFE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUcjl1" x1="15.938" x2="7.782" y1="5.812" y2="18.188" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0AEFF"></svg:stop><svg:stop offset="1" stop-color="#278EDD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedUcjlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
