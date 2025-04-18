import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAx4x3Icon],svg[flag-ax-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagAx4x30"><svg:path fill-opacity=".7" d="M106.3 0h1133.3v850H106.3z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagAx4x30)" transform="matrix(.56472 0 0 .56482 -60 -.1)"><svg:path fill="#0053a5" d="M0 0h1300v850H0z"></svg:path><svg:g fill="#ffce00"><svg:path d="M400 0h250v850H400z"></svg:path><svg:path d="M0 300h1300v250H0z"></svg:path></svg:g><svg:g fill="#d21034"><svg:path d="M475 0h100v850H475z"></svg:path><svg:path d="M0 375h1300v100H0z"></svg:path></svg:g></svg:g>`,
})
export class FlagAx4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
