import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGoviIcon],svg[token-branded-govi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedGovi0)" d="M7.496 18.645c.07.572.641.926 1.403.693l10.918-7.163c.555-.397.54-1.191-.228-1.678L8.163 3.063c-.264-.17-.667.021-.667.34v3.583l6.963 4.453l-6.963 4.453z"></svg:path><svg:path fill="url(#tokenBrandedGovi1)" d="M16.497 20.234c-.069.572-.609.927-1.382.694L4.198 13.97a1.164 1.164 0 0 1 .222-1.912l11.436-7.406c.276-.17.641.02.641.338v3.495l-7.063 4.542l7.063 4.453z"></svg:path><svg:path fill="#fff" d="M13.225 6.36L9.889 8.522l3.294 2.086l3.303-2.134zm.837 9.59l-3.347-2.119l-3.219 2.033v.207l3.235 2.065z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedGovi0" x1="3.154" x2="11.197" y1="1.391" y2="18.809" gradientUnits="userSpaceOnUse"><svg:stop offset=".26" stop-color="#fff"></svg:stop><svg:stop offset=".84" stop-color="#95C9E3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGovi1" x1="14.602" x2="20.151" y1="1.369" y2="20.918" gradientUnits="userSpaceOnUse"><svg:stop offset=".38" stop-color="#95C9E3"></svg:stop><svg:stop offset=".94" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedGoviIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
