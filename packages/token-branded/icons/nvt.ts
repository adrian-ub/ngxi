import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNvtIcon],svg[token-branded-nvt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNvt0)" fill-rule="evenodd" d="m11.221 6.315l-.243.651l3.492 6.18l.243-.653zm-1.94 5.208l3.501 6.162l.232-.622L9.52 10.88zm4.338 3.905L10.128 9.25l.243-.651l3.49 6.178z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedNvt1)" d="M16.151 17.683H12.78l4.019-10.785a.9.9 0 0 1 .325-.423a.87.87 0 0 1 .502-.16H21l-4.02 10.784a.9.9 0 0 1-.326.424a.9.9 0 0 1-.503.16"></svg:path><svg:path fill="url(#tokenBrandedNvt2)" d="M6.372 17.683H3L7.02 6.898a.9.9 0 0 1 .324-.423a.87.87 0 0 1 .503-.16h3.373L7.2 17.099a.9.9 0 0 1-.325.424a.9.9 0 0 1-.503.16"></svg:path><svg:path fill="url(#tokenBrandedNvt3)" fill-rule="evenodd" d="M11.22 6.315h.004l.487.862l-.246.646l-.487-.861zm-.369 3.12l-.48-.851l-.244.652l.478.845zm-.864 2.273l-.467-.828l-.24.643l.466.82z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedNvt4)" d="m14.235 11.647l.48.85l-.249.652l-.473-.857z"></svg:path><svg:path fill="url(#tokenBrandedNvt5)" d="m13.865 14.776l-.492-.864l-.244.648l.493.872z"></svg:path><svg:path fill="url(#tokenBrandedNvt6)" d="m13.012 17.056l-.49-.863l-.232.632l.49.857z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNvt0" x1="5.572" x2="8.926" y1="12.682" y2="19.561" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4E90E2"></svg:stop><svg:stop offset=".857" stop-color="#17E9D9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNvt1" x1="18.776" x2="6.947" y1="10.233" y2="7.146" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5D7CE9"></svg:stop><svg:stop offset="1" stop-color="#17EAD9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNvt2" x1="18.776" x2="6.947" y1="10.233" y2="7.146" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5D7CE9"></svg:stop><svg:stop offset="1" stop-color="#17EAD9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNvt3" x1="2.249" x2="7.229" y1="12" y2="19.708" gradientUnits="userSpaceOnUse"><svg:stop offset=".39" stop-color="#2E4177"></svg:stop><svg:stop offset="1" stop-color="#2E4177" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNvt4" x1="2.411" x2="-16.282" y1="33.096" y2="15.984" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3B8382"></svg:stop><svg:stop offset="1" stop-color="#439A99" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNvt5" x1="23.539" x2="5.065" y1="15.843" y2="-.985" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3B8382"></svg:stop><svg:stop offset="1" stop-color="#439A99" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNvt6" x1="13.968" x2="12.687" y1="15.184" y2="14.827" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3B8382"></svg:stop><svg:stop offset="1" stop-color="#439A99" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNvtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
