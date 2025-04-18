import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagJp4x3Icon],svg[flag-jp-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagJp4x30"><svg:path fill-opacity=".7" d="M-88 32h640v480H-88z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagJp4x30)" transform="translate(88 -32)"><svg:path fill="#fff" d="M-128 32h720v480h-720z"></svg:path><svg:circle cx="523.1" cy="344.1" r="194.9" fill="#bc002d" transform="translate(-168.4 8.6)scale(.76554)"></svg:circle></svg:g>`,
})
export class FlagJp4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
