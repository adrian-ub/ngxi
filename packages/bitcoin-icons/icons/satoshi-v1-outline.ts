import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSatoshiV1OutlineIcon],svg[bitcoin-icons-satoshi-v1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 20.5a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17ZM8.86 8.011l7.639 2.063m-3.41-2.804l.406-1.774m-2.992 13.008l.408-1.773M8.18 10.969l7.636 2.066m-8.316.89l7.638 2.064"></svg:path>`,
})
export class BitcoinIconsSatoshiV1OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
