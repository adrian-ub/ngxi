import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMexIcon],svg[token-branded-mex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMex0)" d="m5.718 8.31l.901-.584l.847.583l-.847.515zm-1.53.847l-.9.584l.9.514l.847-.514zM3 9.974v4.218l3.6 2.082V12.11zm3.62-.817l-.902.584l.901.514l.847-.514zm-.902 2.016l.901-.584l.847.583l-.847.515zm-.329-1.295l-.9.583l.9.515l.848-.515zm1.532.583l.901-.583l.847.583l-.847.515zm2.13-1.304l-.902.584l.901.514l.847-.514z"></svg:path><svg:path fill="url(#tokenBrandedMex1)" d="M10.2 14.474v-4.5h.9l1.35 2.986l1.35-2.986h3.15v.9h-2.26v.9h2.26v.9h-2.26v.9h2.26v.617l1.402-2.057l-1.4-2.16h1.096l.862 1.344l.822-1.344h1.177l-1.42 2.16l1.51 2.34h-1.135l-.954-1.514l-.944 1.514H13.8v-2.34l-.9 2.34H12l-.9-2.34v2.34z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMex0" x1="6.448" x2="6.448" y1="7.726" y2="16.274" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#213973"></svg:stop><svg:stop offset="1" stop-color="#02094B"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMex1" x1="15.6" x2="15.6" y1="9.974" y2="14.474" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#213973"></svg:stop><svg:stop offset="1" stop-color="#02094B"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
