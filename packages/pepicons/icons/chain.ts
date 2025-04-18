import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsChainIcon],svg[pepicons-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:rect width="6" height="10" x="12.784" y="2.384" rx="3" transform="rotate(33.038 12.784 2.384)"></svg:rect><svg:rect width="6" height="10" x="7.836" y="6.323" rx="3" transform="rotate(33.038 7.836 6.323)"></svg:rect></svg:g>`,
})
export class PepiconsChainIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
