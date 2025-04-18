import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDiaIcon],svg[token-branded-dia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDia0)" d="M10.935 8.294V6.177h2.647l3.971 3.176l.794 3.176c0 6.354-6.353 8.471-8.735 8.471c-2.383 0-3.97-1.323-3.97-1.588l3.97-.53c1.764-1.147 5.347-4.023 5.559-6.353c0-2.382-2.736-3.794-4.236-4.235"></svg:path><svg:path fill="url(#tokenBrandedDia1)" d="M10.936 16.765H8.289V3h2.382c3.671 0 7.941 3.176 7.676 10.059c-.529-4.765-5.382-6.883-7.411-6.883z"></svg:path><svg:path fill="url(#tokenBrandedDia2)" d="M8.288 3L5.641 4.853v14.559h2.382c3.672 0 7.677-2.912 7.148-6.883c-1.06 3.706-4.853 4.236-6.883 4.236z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDia0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5A3B90"></svg:stop><svg:stop offset=".292" stop-color="#614397"></svg:stop><svg:stop offset=".615" stop-color="#8071B3"></svg:stop><svg:stop offset=".857" stop-color="#AEBADE"></svg:stop><svg:stop offset="1" stop-color="#C2DCF1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDia1" x1="18.344" x2="5.641" y1="11.3" y2="11.3" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6C5DF4"></svg:stop><svg:stop offset=".437" stop-color="#8093D6"></svg:stop><svg:stop offset="1" stop-color="#9DE2AE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDia2" x1="5.641" x2="18.876" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5B51EF"></svg:stop><svg:stop offset=".19" stop-color="#8367D3"></svg:stop><svg:stop offset=".45" stop-color="#B483AA"></svg:stop><svg:stop offset=".715" stop-color="#E7A081"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
