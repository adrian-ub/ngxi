import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCndIcon],svg[token-branded-cnd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" fill-rule="evenodd" d="M12 19.875a7.875 7.875 0 1 0 0-15.75a7.875 7.875 0 0 0 0 15.75M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9" clip-rule="evenodd"></svg:path><svg:path fill="#0C0E15" d="M12 13.125a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25"></svg:path></svg:g>`,
})
export class TokenBrandedCndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
