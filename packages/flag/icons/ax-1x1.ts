import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAx1x1Icon],svg[flag-ax-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagAx1x10"><svg:path fill-opacity=".7" d="M166 0h850v850H166z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagAx1x10)" transform="translate(-100)scale(.6024)"><svg:path fill="#0053a5" d="M0 0h1300v850H0z"></svg:path><svg:g fill="#ffce00"><svg:path d="M400 0h250v850H400z"></svg:path><svg:path d="M0 300h1300v250H0z"></svg:path></svg:g><svg:g fill="#d21034"><svg:path d="M475 0h100v850H475z"></svg:path><svg:path d="M0 375h1300v100H0z"></svg:path></svg:g></svg:g>`,
})
export class FlagAx1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
