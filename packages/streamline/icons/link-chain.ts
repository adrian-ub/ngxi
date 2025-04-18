import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLinkChainIcon],svg[streamline-link-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6 3l1.464-1.464a3.536 3.536 0 0 1 5 5L11 8m-3 3l-1.464 1.464a3.536 3.536 0 0 1-5-5L3 6m6-1L5 9"></svg:path>`,
})
export class StreamlineLinkChainIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
