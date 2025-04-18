import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTwoFactorAuthenticationIcon],svg[carbon-two-factor-authentication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 23.18l-2-2.001l-1.411 1.41L11 26l6-6l-1.41-1.41zM28 30h-4v-2h4V16h-4V8a4.005 4.005 0 0 0-4-4V2a6.007 6.007 0 0 1 6 6v6h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M20 14h-2V8A6 6 0 0 0 6 8v6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M8 8a4 4 0 0 1 8 0v6H8Zm12 20H4V16h16Z"></svg:path>`,
})
export class CarbonTwoFactorAuthenticationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
