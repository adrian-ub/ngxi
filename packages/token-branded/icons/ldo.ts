import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLdoIcon],svg[token-branded-ldo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLdo0)" d="m11.997 14.129l-5.106-3l-.144.22a6.32 6.32 0 0 0 .846 7.816a6.2 6.2 0 0 0 8.808 0a6.296 6.296 0 0 0 .847-7.816l-.145-.22z"></svg:path><svg:path fill="url(#tokenBrandedLdo1)" d="m17.078 11.14l-5.066 2.978L6.91 11.14l5.1-2.69z"></svg:path><svg:path fill="url(#tokenBrandedLdo2)" d="m12.002 3l4.404 6.95l-4.404 2.585z"></svg:path><svg:path fill="url(#tokenBrandedLdo3)" d="M12.002 3v9.535L7.6 9.945z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLdo0" x1="11.997" x2="11.997" y1="3" y2="21.006" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#498BE9"></svg:stop><svg:stop offset="1" stop-color="#56F2FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLdo1" x1="11.996" x2="11.996" y1="3.015" y2="20.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A8CEA"></svg:stop><svg:stop offset=".7" stop-color="#5ABEF4"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLdo2" x1="13.325" x2="10.874" y1="13.006" y2="21.729" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB8174"></svg:stop><svg:stop offset=".56" stop-color="#568FDD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLdo3" x1="8.531" x2="9.328" y1="7.767" y2="11.618" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE235"></svg:stop><svg:stop offset=".61" stop-color="#5DCBA2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLdoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
