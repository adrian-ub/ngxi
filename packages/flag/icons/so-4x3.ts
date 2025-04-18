import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSo4x3Icon],svg[flag-so-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagSo4x30"><svg:path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagSo4x30)" transform="translate(80)scale(.9375)"><svg:path fill="#40a6ff" d="M-128 0h768v512h-768z"></svg:path><svg:path fill="#fff" d="M336.5 381.2L254 327.7l-82.1 54l30.5-87.7l-82-54.2L222 239l31.4-87.5l32.1 87.3l101.4.1l-81.5 54.7z"></svg:path></svg:g>`,
})
export class FlagSo4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
