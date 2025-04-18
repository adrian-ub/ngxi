import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTifiIcon],svg[token-branded-tifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00A3FF" d="M3 14.7v-.18l6.412-6.57h2.97l2.318 2.394l-1.525 1.598l-2.273-2.38l-4.95 5.138zm18-5.4v.18l-6.413 6.57h-2.97L9.3 13.656l1.525-1.597l2.273 2.38l4.95-5.139z"></svg:path>`,
})
export class TokenBrandedTifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
