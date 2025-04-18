import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundRateReviewIcon],svg[ic-round-rate-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14zm11 0h-6.5l2-2H17c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundRateReviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
