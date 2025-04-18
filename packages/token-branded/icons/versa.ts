import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVersaIcon],svg[token-branded-versa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2B2D78" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#434487" d="M12 19.687a7.687 7.687 0 1 0 0-15.374a7.687 7.687 0 0 0 0 15.374"></svg:path><svg:path fill="#5C5D96" d="M12 18.274a6.274 6.274 0 1 0 0-12.547a6.274 6.274 0 0 0 0 12.547"></svg:path><svg:path fill="#7373A5" d="M12 16.833a4.833 4.833 0 1 0 0-9.667a4.833 4.833 0 0 0 0 9.667"></svg:path><svg:path fill="#898BB4" d="M12 15.44a3.441 3.441 0 1 0 0-6.881a3.441 3.441 0 0 0 0 6.882"></svg:path><svg:path fill="#9F9FC1" d="M12 14.192a2.192 2.192 0 1 0 0-4.383a2.192 2.192 0 0 0 0 4.383"></svg:path><svg:path fill="#B1B1CD" d="M12 13.027a1.027 1.027 0 1 0 0-2.054a1.027 1.027 0 0 0 0 2.054"></svg:path><svg:path fill="#fff" d="M12.006 17.294L7.305 7.235h1.927l2.774 5.962l2.859-5.962h1.842z"></svg:path></svg:g>`,
})
export class TokenBrandedVersaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
