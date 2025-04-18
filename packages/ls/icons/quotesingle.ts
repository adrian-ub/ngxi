import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsQuotesingleIcon],svg[ls-quotesingle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h94v113L38 231L2 213L52 95H0z"></svg:path>`,
})
export class LsQuotesingleIcon {
  readonly viewBox = input("0 0 94 723")
  readonly width = input("0.14em")
  readonly height = input("1em")
}
