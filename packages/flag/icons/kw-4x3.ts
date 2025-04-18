import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKw4x3Icon],svg[flag-kw-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagKw4x30"><svg:path fill-opacity=".7" d="M0 0h682.7v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagKw4x30)" transform="scale(.9375)"><svg:path fill="#fff" d="M0 170.6h1024v170.7H0z"></svg:path><svg:path fill="#f31830" d="M0 341.3h1024V512H0z"></svg:path><svg:path fill="#00d941" d="M0 0h1024v170.7H0z"></svg:path><svg:path fill="#000001" d="M0 0v512l255.4-170.7l.6-170.8z"></svg:path></svg:g>`,
})
export class FlagKw4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
