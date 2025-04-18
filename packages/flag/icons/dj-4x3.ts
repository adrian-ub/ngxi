import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagDj4x3Icon],svg[flag-dj-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagDj4x30"><svg:path fill-opacity=".7" d="M-40 0h682.7v512H-40z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagDj4x30)" transform="translate(37.5)scale(.94)"><svg:path fill="#0c0" d="M-40 0h768v512H-40z"></svg:path><svg:path fill="#69f" d="M-40 0h768v256H-40z"></svg:path><svg:path fill="#fffefe" d="m-40 0l382.7 255.7L-40 511z"></svg:path><svg:path fill="red" d="M119.8 292L89 270l-30.7 22.4L69.7 256l-30.6-22.5l37.9-.3l11.7-36.3l12 36.2h37.9l-30.5 22.7l11.7 36.4z"></svg:path></svg:g>`,
})
export class FlagDj4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
