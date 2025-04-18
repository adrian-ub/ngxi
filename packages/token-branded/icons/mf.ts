import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMfIcon],svg[token-branded-mf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F0F3FA" d="M7.18 3h9.64C19.105 3 21 4.935 21 7.348v9.304C21 19.026 19.144 21 16.82 21H7.18C4.895 21 3 19.065 3 16.652V7.348C3 4.93 4.856 3 7.18 3"></svg:path><svg:path fill="url(#tokenBrandedMf0)" d="M8.77 9.486a1.58 1.58 0 0 1-1.254-1.8a1.524 1.524 0 0 1 1.75-1.294l7.65 1.373a1.58 1.58 0 0 1 1.254 1.8a1.524 1.524 0 0 1-1.75 1.293z"></svg:path><svg:path fill="url(#tokenBrandedMf1)" d="M8.157 13.872a1.5 1.5 0 0 1-1.192-1.755a1.48 1.48 0 0 1 1.721-1.215l4.9.912c.826.151 1.35.956 1.198 1.755a1.48 1.48 0 0 1-1.14 1.203a1.5 1.5 0 0 1-.582.011z"></svg:path><svg:path fill="url(#tokenBrandedMf2)" d="M7.612 17.89a1.53 1.53 0 0 1-1.215-1.778c.146-.85.883-1.43 1.693-1.277l1.547.275a1.53 1.53 0 0 1 1.214 1.778c-.146.85-.883 1.429-1.693 1.277z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMf0" x1="2.531" x2="22.545" y1="7.504" y2="9.149" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF5B5D"></svg:stop><svg:stop offset="1" stop-color="#FE38A3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMf1" x1="2.995" x2="23.489" y1="8.133" y2="10.112" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2FF3F9"></svg:stop><svg:stop offset="1" stop-color="#0ABCFE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMf2" x1="6.375" x2="11.438" y1="15.937" y2="16.781" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BA74FF"></svg:stop><svg:stop offset="1" stop-color="#6D6BFA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
