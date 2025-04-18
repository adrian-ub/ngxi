import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNbtIcon],svg[token-branded-nbt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNbt0)" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-1.059 0a7.941 7.941 0 1 1-15.883 0a7.941 7.941 0 0 1 15.883 0" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedNbt1)" d="M16.235 13.98c0 .657-.62 1.197-1.324 1.197s-1.323-.54-1.323-1.197V9.883c0-.794-.46-1.588-1.525-1.588h-.127c-1.064 0-1.525.794-1.525 1.588v4.097c0 .657-.62 1.197-1.323 1.197c-.704 0-1.324-.54-1.324-1.197V9.353c0-2.112 1.906-3.706 4.15-3.706h.128c2.223 0 4.193 1.605 4.193 3.706z"></svg:path><svg:path fill="url(#tokenBrandedNbt2)" d="M9.088 8.295a1.324 1.324 0 1 0 0-2.648a1.324 1.324 0 0 0 0 2.648"></svg:path><svg:path fill="#2A1F63" d="M7.764 16.234h8.47v1.06h-8.47z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNbt0" x1="18.618" x2="5.382" y1="5.382" y2="18.618" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AC89DD"></svg:stop><svg:stop offset="1" stop-color="#9864E6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNbt1" x1="2.999" x2="20.364" y1="8" y2="19.719" gradientUnits="userSpaceOnUse"><svg:stop offset=".14" stop-color="#7B72DC"></svg:stop><svg:stop offset=".35" stop-color="#7A73E6"></svg:stop><svg:stop offset="1" stop-color="#BC9CEB"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNbt2" x1="6.599" x2="17.399" y1="4.8" y2="17.4" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DFE8F7"></svg:stop><svg:stop offset="1" stop-color="#BBBBF1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNbtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
