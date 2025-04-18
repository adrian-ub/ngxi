import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconArrowSmallUpIcon],svg[octicon-arrow-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M3 5L0 9h2v2h2V9h2L3 5z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowSmallUpIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
