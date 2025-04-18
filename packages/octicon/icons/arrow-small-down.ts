import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconArrowSmallDownIcon],svg[octicon-arrow-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 7V5H2v2H0l3 4l3-4H4z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowSmallDownIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
