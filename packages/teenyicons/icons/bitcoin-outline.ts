import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBitcoinOutlineIcon],svg[teenyicons-bitcoin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 1.5h5a3 3 0 1 1 0 6h-5m0-6v6m0-6H2m1.5 0V0m0 7.5h6a3 3 0 1 1 0 6h-6m0-6v6m0-6H2m1.5 6H2m1.5 0V15m4-15v1.5m0 12V15"></svg:path>`,
})
export class TeenyiconsBitcoinOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
