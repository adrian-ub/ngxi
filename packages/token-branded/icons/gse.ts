import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGseIcon],svg[token-branded-gse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#24ABCD" d="M17.625 12a5.626 5.626 0 0 1-9.602 3.977A5.625 5.625 0 0 1 12 6.375V3a9 9 0 1 0 9 9zm0-3.938V12h-3.938V8.062zm0 0v-2.25h2.25v2.25z"></svg:path>`,
})
export class TokenBrandedGseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
