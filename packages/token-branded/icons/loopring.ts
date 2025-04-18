import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLoopringIcon],svg[token-branded-loopring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1F63FF" d="M8.993 5.117V18.88L3 13.99zm0 13.766l5.654-4.889l-1.645-2.582H21z"></svg:path>`,
})
export class TokenBrandedLoopringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
