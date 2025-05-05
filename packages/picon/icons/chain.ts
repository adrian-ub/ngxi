import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChainIcon],svg[picon-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v1h4V4M5 6h2V3H5l1-1h1l1 1v3L7 7H4M1 7L0 6V3l1-1h3L3 3H1v3h2L2 7"></svg:path>`,
})
export class PiconChainIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
