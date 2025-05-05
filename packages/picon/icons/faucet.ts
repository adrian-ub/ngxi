import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFaucetIcon],svg[picon-faucet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h3l1-1l1 1h2v3H5V5H0m2-4h4v1H2"></svg:path>`,
})
export class PiconFaucetIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
