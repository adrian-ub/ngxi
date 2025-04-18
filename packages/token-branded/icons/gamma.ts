import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGammaIcon],svg[token-branded-gamma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FE0024" d="M12.563 10.543L20.123 3l.787.788l-7.577 7.666L21 11.437v1.126h-7.667l5.417 5.383l-.788.787l-5.394-5.512v7.222h-1.125v-7.217L3.782 21L3 20.212l7.667-7.65H3v-1.125l7.667.017l-5.136-5.22l.788-.787l5.118 5.096V3h1.126z"></svg:path>`,
})
export class TokenBrandedGammaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
