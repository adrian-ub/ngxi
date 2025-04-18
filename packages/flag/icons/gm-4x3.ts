import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGm4x3Icon],svg[flag-gm-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagGm4x30"><svg:path fill-opacity=".7" d="M0-48h640v480H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagGm4x30)" transform="translate(0 48)"><svg:path fill="red" d="M0-128h640V85.3H0z"></svg:path><svg:path fill="#fff" d="M0 85.3h640V121H0z"></svg:path><svg:path fill="#009" d="M0 120.9h640V263H0z"></svg:path><svg:path fill="#fff" d="M0 263.1h640v35.6H0z"></svg:path><svg:path fill="#090" d="M0 298.7h640V512H0z"></svg:path></svg:g>`,
})
export class FlagGm4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
