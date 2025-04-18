import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPlaIcon],svg[token-branded-pla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0079F0" d="M10.314 5.533a1.874 1.874 0 0 1 3.372 0l6.308 13.097a.62.62 0 0 1-.261.815a.6.6 0 0 1-.3.078H4.567a.625.625 0 0 1-.562-.893z"></svg:path><svg:path fill="#fff" d="M9.47 5.126a2.81 2.81 0 0 1 5.06 0l6.314 13.091a1.56 1.56 0 0 1-1.405 2.242H4.56a1.56 1.56 0 0 1-1.405-2.242l6.308-13.09zm3.373.812a.936.936 0 0 0-1.686 0L5.06 18.586h13.872L12.837 5.945z"></svg:path></svg:g>`,
})
export class TokenBrandedPlaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
