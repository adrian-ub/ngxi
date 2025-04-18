import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKaiIcon],svg[token-branded-kai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7E4778" d="m10.751 9.89l-2.5-6.03l4 2.03z"></svg:path><svg:path fill="#9B1B2E" d="M10.75 9.89v-3.5l1.5-.5z"></svg:path><svg:path fill="#D3302D" d="m10.751 6.39l-2.5-2.53l4 2.03z"></svg:path><svg:path fill="#9B2026" d="M21 8.89h-4.25l2 3.5z"></svg:path><svg:path fill="#BD282E" d="M16.75 8.89L13 10.39l5.75 2z"></svg:path><svg:path fill="#DD2A2D" d="m14.707 5.39l-1.707 5l3.75-1.5z"></svg:path><svg:path fill="#BC2328" d="m19 4.64l-2.25 4.25H21z"></svg:path><svg:path fill="#EE4642" d="m14.707 5.39l2.044 3.5L19 4.64z"></svg:path><svg:path fill="#D5302D" d="m13.251 19.64l-2.75-7.75l6.75 2.5z"></svg:path><svg:path fill="#9D1C21" d="M13.249 19.64v-5.25h4z"></svg:path><svg:path fill="#BD2C33" d="m13.251 14.39l-2.75-2.5l6.75 2.5z"></svg:path><svg:path fill="#797CB3" d="M6 4.39L3 8.14l3 7l5.25 5z"></svg:path><svg:path fill="#9A1C31" d="M8.5 11.89L6 15.14l5.25 5z"></svg:path><svg:path fill="#7F4778" d="m6 10.14l-3-2l3 7l2.5-3.25z"></svg:path></svg:g>`,
})
export class TokenBrandedKaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
