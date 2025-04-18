import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCreditCardIcon],svg[codicon-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 5v1H2V5zM2 7h12v5H2zm12-3H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-3 6h2v1h-2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconCreditCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
