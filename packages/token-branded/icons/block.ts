import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBlockIcon],svg[token-branded-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2D338A"><svg:path d="M7.731 4.588H16.5L21 12l-4.5 7.412H7.654L12.077 12zm4.654 2.647L15.257 12l-2.872 4.765h2.572L17.811 12L14.94 7.235h-2.563z"></svg:path><svg:path d="M8.666 7.907L6.18 12l2.468 4.06l-1.577 2.635L3 12l4.106-6.761z"></svg:path></svg:g>`,
})
export class TokenBrandedBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
