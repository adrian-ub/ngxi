import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCf4x3Icon],svg[flag-cf-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCf4x30"><svg:path fill-opacity=".7" d="M-12.4 32h640v480h-640z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagCf4x30)" transform="translate(12.4 -32)"><svg:path fill="#00f" d="M-52 32h719.3v119H-52z"></svg:path><svg:path fill="#ff0" d="M-52 391.6h719.3V512H-52z"></svg:path><svg:path fill="#009a00" d="M-52 271.3h719.3v120.3H-52z"></svg:path><svg:path fill="#fff" d="M-52 151h719.3v120.3H-52z"></svg:path><svg:path fill="red" d="M247.7 32.5h119.9V512H247.7z"></svg:path><svg:path fill="#ff0" d="m99.3 137.7l-31.5-21.8l-31.3 22L47.4 101L16.9 78l38.2-1l12.5-36.3L80.3 77l38.1.7L88.2 101"></svg:path></svg:g>`,
})
export class FlagCf4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
