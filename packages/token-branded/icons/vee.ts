import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVeeIcon],svg[token-branded-vee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#718C98"><svg:path d="M17.903 3.552a3.053 3.053 0 0 0-3.098 3.098c0 1.75 1.357 3.097 3.098 3.097S21 8.4 21 6.65c0-1.752-1.357-3.098-3.097-3.098m-9.89.107l6.477 12.136c.04.068.04.152 0 .214l-2.31 4.325a.215.215 0 0 1-.376 0L3.035 3.868a.208.208 0 0 1 .192-.316H7.85c.045 0 .13.04.17.107z"></svg:path><svg:path d="M6.904 8.913a55 55 0 0 1-3.683-5.361c-.169 0-.276.169-.191.315l8.774 16.467a.213.213 0 0 0 .377 0l2.061-3.858A44 44 0 0 1 6.91 8.913z"></svg:path></svg:g>`,
})
export class TokenBrandedVeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
