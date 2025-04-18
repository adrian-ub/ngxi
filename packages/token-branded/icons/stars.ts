import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStarsIcon],svg[token-branded-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E2BB5E" d="M8.581 9.985a.27.27 0 0 0-.291-.354l-5.055.72a.271.271 0 0 0-.16.455l3.6 3.716a.265.265 0 0 0 .45-.106z"></svg:path><svg:path fill="url(#tokenBrandedStars0)" d="M6.745 20.393a.265.265 0 0 0 .376.317l4.727-2.244a.27.27 0 0 1 .222 0l4.94 2.24a.27.27 0 0 0 .365-.334c-.932-2.806-1.774-5.58-2.674-8.38a.266.266 0 0 0-.476-.053l-1.996 3.578a.27.27 0 0 1-.238.138h-.085a.26.26 0 0 1-.232-.143L9.736 11.95a.27.27 0 0 0-.233-.143h-.026a.266.266 0 0 0-.26.19a244 244 0 0 0-2.472 8.396"></svg:path><svg:path fill="#DBA527" d="M16.838 14.338a.266.266 0 0 0 .328.177a.26.26 0 0 0 .117-.071l3.636-3.637a.271.271 0 0 0-.153-.46l-5.029-.704a.27.27 0 0 0-.296.349z"></svg:path><svg:path fill="url(#tokenBrandedStars1)" d="M14.024 9.551a.32.32 0 0 0 0-.248l-.027-.064l-1.784-5.78a.264.264 0 0 0-.513 0l-1.747 5.78l-.026.085a.3.3 0 0 0 .01.201l1.731 3.991a.28.28 0 0 0 .244.16h.063a.27.27 0 0 0 .244-.16l1.8-3.965z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedStars0" x1="-3.297" x2="27.102" y1="1.487" y2="1.487" gradientUnits="userSpaceOnUse"><svg:stop offset=".49" stop-color="#E2BB5E"></svg:stop><svg:stop offset=".5" stop-color="#DBA527"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStars1" x1="3.003" x2="21.001" y1="10.901" y2="10.901" gradientUnits="userSpaceOnUse"><svg:stop offset=".49" stop-color="#E2BB5E"></svg:stop><svg:stop offset=".5" stop-color="#DBA527"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedStarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
