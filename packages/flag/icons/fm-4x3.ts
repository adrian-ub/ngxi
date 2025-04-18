import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagFm4x3Icon],svg[flag-fm-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagFm4x30"><svg:path fill-opacity=".7" d="M-81.3 0h682.6v512H-81.3z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagFm4x30)" transform="translate(76.3)scale(.94)"><svg:path fill="#6797d6" d="M-252 0H772v512H-252z"></svg:path><svg:path fill="#fff" d="m259.8 123l-32.4 22.2l12.4-35.9l-32.5-22.2h40.1l12.4-35.9l12.4 36h40l-32.4 22.1l12.4 35.9M259.8 390l-32.4-22.2l12.4 36l-32.5 22.1h40.1l12.4 35.9l12.4-36l40 .1l-32.4-22.2l12.4-35.9m-188.4-92.4L79.3 306l1.4-38l-37.5-11.7l38.4-11.7l1.3-38l22.3 30.8l38.4-11.8l-24.6 30.7l22.4 30.7m274.2-11.7l24.6 30.7l-1.4-38l37.5-11.7l-38.4-11.7l-1.3-38l-22.3 30.8l-38.4-11.8l24.6 30.7l-22.4 30.7"></svg:path></svg:g>`,
})
export class FlagFm4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
