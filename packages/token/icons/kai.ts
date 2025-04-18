import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKaiIcon],svg[token-kai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.751 9.89l-2.5-6.03l4 2.03z"></svg:path><svg:path fill="currentColor" d="M10.75 9.89v-3.5l1.5-.5z"></svg:path><svg:path fill="currentColor" d="m10.751 6.39l-2.5-2.53l4 2.03zM21 8.89h-4.25l2 3.5z"></svg:path><svg:path fill="currentColor" d="M16.75 8.89L13 10.39l5.75 2z"></svg:path><svg:path fill="currentColor" d="m14.707 5.39l-1.707 5l3.75-1.5zM19 4.64l-2.25 4.25H21z"></svg:path><svg:path fill="currentColor" d="m14.707 5.39l2.044 3.5L19 4.64zm-1.456 14.25l-2.75-7.75l6.75 2.5z"></svg:path><svg:path fill="currentColor" d="M13.249 19.64v-5.25h4zm.002-5.25l-2.75-2.5l6.75 2.5zM6 4.39L3 8.14l3 7l5.25 5z"></svg:path><svg:path fill="currentColor" d="M8.5 11.89L6 15.14l5.25 5z"></svg:path><svg:path fill="currentColor" d="m6 10.14l-3-2l3 7l2.5-3.25z"></svg:path>`,
})
export class TokenKaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
