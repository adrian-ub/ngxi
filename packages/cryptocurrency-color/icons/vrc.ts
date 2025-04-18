import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorVrcIcon],svg[cryptocurrency-color-vrc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#418bca"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M20.265 8H25l-9 18L7 8h4.704l4.327 9.113zM16 12.959c-.788 0-1.427-.656-1.427-1.465s.639-1.466 1.427-1.466s1.427.657 1.427 1.466s-.64 1.465-1.427 1.465m6.465 4.04c.788 0 1.427.657 1.426 1.466c0 .81-.638 1.465-1.426 1.465s-1.427-.656-1.427-1.465S21.677 17 22.465 17z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorVrcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
