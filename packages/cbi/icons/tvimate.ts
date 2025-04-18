import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiTvimateIcon],svg[cbi-tvimate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.51 9.999l5.624 4.692l2.719-6.201H22l-3.985 10.764H14.7ZM6.451 4.561H3.117v3.557H2v2.421h1.08l-.061 4.374a4.457 4.457 0 0 0 7.131 3.626l-.906-2.377a.72.72 0 0 1-.474.355a2.64 2.64 0 0 1-1.6-.149a1.2 1.2 0 0 1-.681-.783l.018-5.085l2.681.019l.019-2.384l-2.756-.017Z"></svg:path>`,
})
export class CbiTvimateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
