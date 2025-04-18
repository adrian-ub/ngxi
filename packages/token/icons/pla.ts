import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPlaIcon],svg[token-pla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.315 5.533a1.874 1.874 0 0 1 3.372 0l6.308 13.097a.625.625 0 0 1-.562.893H4.57a.624.624 0 0 1-.562-.893z"></svg:path><svg:path fill="currentColor" d="M9.47 5.126a2.81 2.81 0 0 1 5.06 0l6.314 13.091a1.56 1.56 0 0 1-1.405 2.242H4.56a1.562 1.562 0 0 1-1.405-2.242l6.308-13.09zm3.373.812a.936.936 0 0 0-1.686 0L5.06 18.586h13.872L12.837 5.945z"></svg:path>`,
})
export class TokenPlaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
