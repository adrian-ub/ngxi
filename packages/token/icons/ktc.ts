import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKtcIcon],svg[token-ktc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.321 3v2.571h2.572V3zm0 18V6.857h2.572v7.38L17.078 3h3.6zm8.036-5.722A753 753 0 0 1 17.078 21h3.6l-7.431-7.714z"></svg:path>`,
})
export class TokenKtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
