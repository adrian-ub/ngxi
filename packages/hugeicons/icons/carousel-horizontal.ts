import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCarouselHorizontalIcon],svg[hugeicons-carousel-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8c0-2.357 0-3.536.732-4.268S9.643 3 12 3s3.536 0 4.268.732S17 5.643 17 8v8c0 2.357 0 3.535-.732 4.268S14.357 21 12 21s-3.536 0-4.268-.732C7 19.535 7 18.357 7 16zM2 7c.547.104.95.29 1.268.616C4 8.368 4 9.58 4 12s0 3.632-.732 4.384c-.318.327-.721.511-1.268.616M22 7c-.547.104-.95.29-1.268.616C20 8.368 20 9.58 20 12s0 3.632.732 4.384c.319.327.721.511 1.268.616" color="currentColor"></svg:path>`,
})
export class HugeiconsCarouselHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
