import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsModernTvFourKIcon],svg[hugeicons-modern-tv-four-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 7v3m0 0v3m0-3h-2c-.943 0-1.414 0-1.707-.293S6.5 8.943 6.5 8V7m7 6v-3m0 0V7m0 3l4-3m-4 3l4 3"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10s0 5.657-1.172 6.828S17.771 18 14 18h-4c-3.771 0-5.657 0-6.828-1.172S2 13.771 2 10m14 12a8.4 8.4 0 0 0-4-1a8.4 8.4 0 0 0-4 1"></svg:path></svg:g>`,
})
export class HugeiconsModernTvFourKIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
