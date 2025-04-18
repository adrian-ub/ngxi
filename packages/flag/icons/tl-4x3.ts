import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTl4x3Icon],svg[flag-tl-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagTl4x30"><svg:path fill-opacity=".7" d="M0 0h682.7v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagTl4x30)" transform="scale(.9375)"><svg:path fill="#cb000f" d="M0 0h1031.2v512H0z"></svg:path><svg:path fill="#f8c00c" d="M0 0c3.2 0 512 256.7 512 256.7L0 512z"></svg:path><svg:path fill="#000001" d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512z"></svg:path><svg:path fill="#fff" d="M187.7 298.2L127 284.7l-31 52.8l-5-59.7l-60.7-13.3l54.9-24.9l-3.3-59.3l40.2 43.4l55.4-25.3l-28.9 54l39.2 45.8z"></svg:path></svg:g>`,
})
export class FlagTl4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
