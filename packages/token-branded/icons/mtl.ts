import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMtlIcon],svg[token-branded-mtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M3 4.125h1.125v15.75H3zM8.625 7.5H9.75v10.125H8.625zm5.625 2.25h1.125v5.625H14.25zm5.625-5.625H21v15.75h-1.125z"></svg:path>`,
})
export class TokenBrandedMtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
