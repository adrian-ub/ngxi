import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineRoundaboutRightIcon],svg[ic-baseline-roundabout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.92 8C13.44 5.16 10.97 3 8 3C4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-6.09c0-.98-.71-1.8-1.67-1.97a3.999 3.999 0 1 1 4.61-4.61c.17.96.99 1.67 1.97 1.67h4.26l-1.59 1.59L18 13l4-4l-4-4l-1.41 1.41L18.17 8z"></svg:path>`,
})
export class IcBaselineRoundaboutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
