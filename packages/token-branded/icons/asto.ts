import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAstoIcon],svg[token-branded-asto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="tokenBrandedAsto0" width="20" height="20" x="2" y="2" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" d="M22 2H2v20h20z"></svg:path></svg:mask><svg:g fill="none"><svg:g mask="url(#tokenBrandedAsto0)"><svg:path fill="#1E1E20" d="M2 2h20v20H2z"></svg:path><svg:path fill="url(#tokenBrandedAsto1)" d="M9.428 16.396a5.1 5.1 0 0 1 2.31-.493c.472 0 1.35.025 2.311.493c.911.443 3.143.536 3.143-1.939c0-1.057-.485-2.436-1.153-3.75c-.668-1.321-2.44-4.421-4.3-4.421c-1.857 0-3.629 3.103-4.3 4.421c-.668 1.314-1.154 2.693-1.154 3.75c0 2.475 2.236 2.382 3.143 1.94"></svg:path><svg:path fill="url(#tokenBrandedAsto2)" d="M14.322 14.143a3.393 3.393 0 1 0 0-6.786a3.393 3.393 0 0 0 0 6.786"></svg:path><svg:path fill="url(#tokenBrandedAsto3)" d="M13.8 7.396a3.393 3.393 0 1 0 3.14 5.515a13 13 0 0 0-.9-2.204c-.411-.81-1.232-2.286-2.24-3.31"></svg:path></svg:g><svg:defs><svg:lineargradient id="tokenBrandedAsto1" x1="11.999" x2="11.999" y1="6.286" y2="16.643" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7F70FD"></svg:stop><svg:stop offset=".53" stop-color="#6551F1"></svg:stop><svg:stop offset="1" stop-color="#846DF8"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAsto2" x1="12.301" x2="14.296" y1="6.286" y2="15.369" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F4C9EA"></svg:stop><svg:stop offset="1" stop-color="#E995AE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAsto3" x1="13.918" x2="15.036" y1="7.454" y2="13.607" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F9DBFF"></svg:stop><svg:stop offset=".57" stop-color="#ED9FF9"></svg:stop><svg:stop offset="1" stop-color="#F3BBFB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAstoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
