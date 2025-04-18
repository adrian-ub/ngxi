import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagVn4x3Icon],svg[flag-vn-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagVn4x30"><svg:path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagVn4x30)" transform="translate(80)scale(.9375)"><svg:path fill="#da251d" d="M-128 0h768v512h-768z"></svg:path><svg:path fill="#ff0" d="M349.6 381L260 314.3l-89 67.3L204 272l-89-67.7l110.1-1l34.2-109.4L294 203l110.1.1l-88.5 68.4l33.9 109.6z"></svg:path></svg:g>`,
})
export class FlagVn4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
