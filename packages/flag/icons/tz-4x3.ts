import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTz4x3Icon],svg[flag-tz-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagTz4x30"><svg:path fill-opacity=".7" d="M10 0h160v120H10z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagTz4x30)" transform="matrix(4 0 0 4 -40 0)"><svg:path fill="#09f" d="M0 0h180v120H0z"></svg:path><svg:path fill="#090" d="M0 0h180L0 120z"></svg:path><svg:path fill="#000001" d="M0 120h40l140-95V0h-40L0 95z"></svg:path><svg:path fill="#ff0" d="M0 91.5L137.2 0h13.5L0 100.5zM29.3 120L180 19.5v9L42.8 120z"></svg:path></svg:g>`,
})
export class FlagTz4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
