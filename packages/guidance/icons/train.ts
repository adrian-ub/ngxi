import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceTrainIcon],svg[guidance-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 15.5h3m6 0h3M3.5 11.715c1.513.294 4.623.785 8.5.785c3.878 0 6.987-.491 8.5-.785M8.5 18.5l-.586 1.172A7.6 7.6 0 0 1 6.636 21.5m8.864-3l.586 1.171c.337.675.77 1.29 1.279 1.829m3.635 2a2.6 2.6 0 0 1-.969-.174a7.6 7.6 0 0 1-2.666-1.826M3 23.5c.331 0 .662-.049.969-.174A7.6 7.6 0 0 0 6.636 21.5M3.5 3.5h17m-13.864 18h10.729M3.5 18.5V.5h17v18z"></svg:path>`,
})
export class GuidanceTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
