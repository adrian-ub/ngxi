import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStxIcon],svg[token-branded-stx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7023EB" d="M9.455 9.279a2.72 2.72 0 0 0-2.721 2.72a3.555 3.555 0 0 1-3.558 3.559H3v-.838h.176A2.72 2.72 0 0 0 5.896 12a3.555 3.555 0 0 1 3.56-3.56h4.22A3.555 3.555 0 0 1 17.232 12v.205a3.355 3.355 0 0 1-3.353 3.353v-.838c1.39 0 2.515-1.13 2.515-2.515V12a2.72 2.72 0 0 0-2.72-2.721zm7.778 2.72a3.555 3.555 0 0 1 3.558-3.558H21v.838h-.21a2.72 2.72 0 1 0 0 5.441H21v.838h-.21A3.557 3.557 0 0 1 17.234 12m-6.28-.209v3.768h.838V11.79z"></svg:path>`,
})
export class TokenBrandedStxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
