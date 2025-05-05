import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconProposalIcon],svg[picon-proposal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6H3v2H0V7h2V2h5v1H4v2h2v3H5M3 2L2 1l1-1l1 1"></svg:path>`,
})
export class PiconProposalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
