import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAbtIcon],svg[token-branded-abt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAbt0)" fill-rule="evenodd" d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm7.25 4.64l-7-3.936v7.874zm.25.423L12.5 12l7 3.937zm-.25 8.296l-7-3.937v7.875zm-7.5 3.938l-7-3.938l7-3.937zm0-8.72l-7-3.936l7-3.937zM4.5 8.064l7 3.937l-7 3.937z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedAbt1)" d="m12 7.152l4.216 7.115L12 16.639l-4.216-2.371zm0 .975l-3.533 5.962L12 16.077l3.533-1.988z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAbt0" x1="4.001" x2="19.999" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#06EFA0"></svg:stop><svg:stop offset="1" stop-color="#01FAFC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAbt1" x1="4" x2="19.999" y1="11.999" y2="11.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#06EFA0"></svg:stop><svg:stop offset="1" stop-color="#01FAFC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAbtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
