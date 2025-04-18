import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMultiversxIcon],svg[token-branded-multiversx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#23F7DD" d="M13.125 12L21 7.782L19.648 5.25l-7.354 2.757a.8.8 0 0 1-.59 0L4.353 5.25L3 7.791L10.875 12L3 16.207l1.352 2.543l7.353-2.757a.8.8 0 0 1 .589 0l7.354 2.757L21 16.193z"></svg:path>`,
})
export class TokenBrandedMultiversxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
