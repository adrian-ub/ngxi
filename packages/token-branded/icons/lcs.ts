import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLcsIcon],svg[token-branded-lcs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C4C4C4" d="M7.6 8.52a.86.86 0 0 1 1.378 0l4.43 5.951a.853.853 0 0 1-.53 1.347a.6.6 0 0 1-.308-.043l-2.424-.934a5.17 5.17 0 0 0-3.714 0l-2.424.934a.6.6 0 0 1-.309.043a.853.853 0 0 1-.529-1.347z"></svg:path><svg:path fill="url(#tokenBrandedLcs0)" d="M7.6 8.52a.86.86 0 0 1 1.378 0l4.43 5.951a.853.853 0 0 1-.53 1.347a.6.6 0 0 1-.308-.043l-2.424-.934a5.17 5.17 0 0 0-3.714 0l-2.424.934a.6.6 0 0 1-.309.043a.853.853 0 0 1-.529-1.347z"></svg:path><svg:path fill="url(#tokenBrandedLcs1)" fill-rule="evenodd" d="m13.208 14.203l.2.27a.853.853 0 0 1-.53 1.346a.6.6 0 0 1-.308-.043l-2.424-.934a5.17 5.17 0 0 0-3.303-.139l-.029-.013c1.74-.657 5.413-1.677 6.262-.64q.07.085.132.153" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedLcs2)" d="M15.022 15.479a.86.86 0 0 0 1.378 0l4.43-5.951a.853.853 0 0 0-.53-1.347a.6.6 0 0 0-.309.043l-2.423.934a5.17 5.17 0 0 1-3.715 0l-2.423-.934a.6.6 0 0 0-.309-.043a.853.853 0 0 0-.53 1.347z"></svg:path><svg:path fill="url(#tokenBrandedLcs3)" fill-rule="evenodd" d="m20.629 9.797l.2-.27a.853.853 0 0 0-.529-1.346a.6.6 0 0 0-.309.043l-2.423.934a5.17 5.17 0 0 1-3.304.138l-.028.014c1.74.657 5.412 1.677 6.261.64q.07-.085.132-.153" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLcs0" x1="12" x2="12" y1="8.175" y2="15.825" gradientUnits="userSpaceOnUse"><svg:stop offset=".146" stop-color="#283DA8"></svg:stop><svg:stop offset=".615" stop-color="#4196F9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLcs1" x1="11.999" x2="11.999" y1="8.175" y2="15.827" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#283EAA"></svg:stop><svg:stop offset=".776" stop-color="#4171F9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLcs2" x1="12" x2="12" y1="15.824" y2="8.174" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DB9D16"></svg:stop><svg:stop offset="1" stop-color="#E2DA20"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLcs3" x1="17.618" x2="17.618" y1="10.393" y2="8.174" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E0A500"></svg:stop><svg:stop offset=".743" stop-color="#ECCD3C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLcsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
