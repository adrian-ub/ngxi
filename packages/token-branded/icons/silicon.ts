import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSiliconIcon],svg[token-branded-silicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#007AFF" d="M3 16.5V21c4.163 0 7.967-2.282 9.927-5.956l2.117-3.971A6.74 6.74 0 0 1 21 7.5V3a11.23 11.23 0 0 0-9.927 5.956l-2.117 3.971A6.74 6.74 0 0 1 3 16.5m13.5 0H21V21h-4.5z"></svg:path>`,
})
export class TokenBrandedSiliconIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
