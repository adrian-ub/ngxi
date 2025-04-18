import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLayerIcon],svg[token-branded-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M3 3.643h18V7.5H3z"></svg:path><svg:path fill="#FF47A2" d="M3 10.071h18v3.858H3z"></svg:path><svg:path fill="#fff" d="M3 16.5h18v3.857H3z"></svg:path></svg:g>`,
})
export class TokenBrandedLayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
