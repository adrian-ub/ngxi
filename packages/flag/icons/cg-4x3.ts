import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCg4x3Icon],svg[flag-cg-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCg4x30"><svg:path fill-opacity=".7" d="M-79.5 32h640v480h-640z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagCg4x30)" transform="translate(79.5 -32)"><svg:path fill="#ff0" d="M-119.5 32h720v480h-720z"></svg:path><svg:path fill="#00ca00" d="M-119.5 32v480l480-480z"></svg:path><svg:path fill="red" d="M120.5 512h480V32z"></svg:path></svg:g>`,
})
export class FlagCg4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
