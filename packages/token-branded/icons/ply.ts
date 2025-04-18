import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPlyIcon],svg[token-branded-ply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8DD9F6" d="M13.687 19.299a7.313 7.313 0 1 0 0-14.625a7.313 7.313 0 0 0 0 14.625"></svg:path><svg:path fill="#6161F6" d="M14.88 13.371a1.688 1.688 0 0 0-.015-2.885l-9.31-5.582C4.43 4.229 3 5.039 3 6.35v11.3c0 1.32 1.446 2.128 2.57 1.438z"></svg:path></svg:g>`,
})
export class TokenBrandedPlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
