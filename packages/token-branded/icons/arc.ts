import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedArcIcon],svg[token-branded-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M13.147 5.144a.82.82 0 0 0-.669-.344a.83.83 0 0 0-.668.334L5.057 14.57a12.5 12.5 0 0 1 3.112-1.625l4.294-6.002l4.099 5.925a12.6 12.6 0 0 1 2.895 1.404z"></svg:path><svg:path fill="url(#tokenBrandedArc0)" fill-opacity=".6" d="M3.514 18.804L3 19.2c.098-.123.273-.257.514-.396c2.078-1.527 6.27-4.011 9.89-4.201c4.937-.258 8.06 1.023 7.54 2.556c-.52 1.532-4.16-.515-7.54-.515c-2.967 0-8.141 1.183-9.89 2.16"></svg:path><svg:path fill="url(#tokenBrandedArc1)" fill-opacity=".6" d="M14.011 16.083c-4.279 0-8.944 2.078-10.738 3.117L3 18.788c1.83-1.06 6.593-3.188 11.011-3.188c3.924 0 5.776.735 6.331.997c.129.057.18.206.118.324a.267.267 0 0 1-.35.103c-.478-.22-2.252-.94-6.099-.94"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedArc0" x1="20.424" x2="3.136" y1="12.052" y2="12.567" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#197EAF"></svg:stop><svg:stop offset="1" stop-color="#041C28" stop-opacity=".1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedArc1" x1="19.678" x2="3.519" y1="17.43" y2="19.513" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset=".54" stop-color="#AEAEAE"></svg:stop><svg:stop offset="1" stop-color="#1E1E1E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedArcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
