import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBsxIcon],svg[token-branded-bsx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4EFFAF" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-2.813-9c0-1.609.389-4.939 2.813-7.875c2.424 2.936 2.813 6.266 2.813 7.875s-.389 4.94-2.813 7.875A12.62 12.62 0 0 1 9.187 12"></svg:path>`,
})
export class TokenBrandedBsxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
