import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZeroNetworkIcon],svg[token-branded-zero-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FE5161" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path><svg:path fill="#fff" d="M12.04 7.173c-3.136 0-4.376 1.917-4.376 4.74c0 2.822 1.24 4.833 4.377 4.833s4.377-2.011 4.377-4.834s-1.24-4.74-4.377-4.74m.001 8.026c-1.43 0-2.171-.84-2.395-2.253a.175.175 0 0 1 .172-.203h4.424c.107 0 .189.096.173.202c-.218 1.414-.943 2.254-2.373 2.254M9.8 11.21a.175.175 0 0 1-.173-.2c.198-1.47.94-2.291 2.414-2.291s2.2.822 2.392 2.292a.175.175 0 0 1-.173.199z"></svg:path></svg:g>`,
})
export class TokenBrandedZeroNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
