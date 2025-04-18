import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDhtIcon],svg[token-branded-dht-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00A0D0" d="m13.564 3.005l-3.129 1.246v14.444l3.13-1.251V3zm-5.736 8.813L4.7 13.079V21l3.128-1.257zM19.3 9.72l-3.129-1.235v9.542L19.3 19.29z"></svg:path>`,
})
export class TokenBrandedDhtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
