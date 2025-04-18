import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPolyxIcon],svg[token-branded-polyx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPolyx0)" d="M12.969 12c1.038 0 2.207-.44 2.207-1.588c0-1.107-1.122-1.589-2.207-1.589H9.882V7.765h3.25c1.706 0 3.103.863 3.103 2.647s-1.466 2.647-3.102 2.647H10.94v3.706H9.882V12z"></svg:path><svg:path fill="url(#tokenBrandedPolyx1)" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-1.059a7.942 7.942 0 1 0 0-15.883a7.942 7.942 0 0 0 0 15.883" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPolyx0" x1="108.825" x2="108.773" y1="2.651" y2="37.348" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF2E72"></svg:stop><svg:stop offset=".93" stop-color="#4A125E"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPolyx1" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF2E72"></svg:stop><svg:stop offset="1" stop-color="#631661"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPolyxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
